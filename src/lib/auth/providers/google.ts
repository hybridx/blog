export const googleOAuth = {
  authorizeUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenUrl: 'https://oauth2.googleapis.com/token',
  userUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
  scope: 'openid email profile',
} as const;
