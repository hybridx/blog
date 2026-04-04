export async function createComment(
  _postSlug: string,
  _userId: string,
  _content: string,
): Promise<void> {
  // TODO
}

export async function getComments(_postSlug: string): Promise<unknown[]> {
  return [];
}

export async function deleteComment(
  _commentId: string,
  _userId: string,
  _isAdmin: boolean,
): Promise<void> {
  // TODO
}
