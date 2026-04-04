import './load-env';
import * as Minio from 'minio';

let client: Minio.Client | null = null;

function parseEndpoint(): { host: string; port: number; useSSL: boolean } {
  const raw = process.env.MINIO_ENDPOINT ?? 'localhost:9000';
  const useSSL = process.env.MINIO_USE_SSL === 'true';
  if (raw.includes(':')) {
    const [host, portStr] = raw.split(':');
    return { host: host!, port: Number(portStr) || 9000, useSSL };
  }
  return { host: raw, port: 9000, useSSL };
}

function getClient(): Minio.Client {
  if (!client) {
    const { host, port, useSSL } = parseEndpoint();
    client = new Minio.Client({
      endPoint: host,
      port,
      useSSL,
      accessKey: process.env.MINIO_ACCESS_KEY ?? 'minioadmin',
      secretKey: process.env.MINIO_SECRET_KEY ?? 'minioadmin',
    });
  }
  return client;
}

const BUCKET = process.env.MINIO_BUCKET ?? 'blog-images';

/** True if the client can reach MinIO and the configured bucket exists. */
export async function checkMinioConnection(): Promise<boolean> {
  try {
    const c = getClient();
    return await c.bucketExists(BUCKET);
  } catch {
    return false;
  }
}

export async function uploadImage(
  _file: Buffer,
  key: string,
  _contentType: string,
): Promise<void> {
  const c = getClient();
  await c.putObject(BUCKET, key, _file);
}

export async function getImageUrl(key: string): Promise<string> {
  const c = getClient();
  return c.presignedGetObject(BUCKET, key, 7 * 24 * 60 * 60);
}

export async function listImages(): Promise<string[]> {
  const c = getClient();
  const names: string[] = [];
  const stream = c.listObjectsV2(BUCKET, '', true);
  return new Promise((resolve, reject) => {
    stream.on('data', (obj) => {
      if (obj.name) names.push(obj.name);
    });
    stream.on('error', reject);
    stream.on('end', () => resolve(names));
  });
}

export async function deleteImage(key: string): Promise<void> {
  const c = getClient();
  await c.removeObject(BUCKET, key);
}
