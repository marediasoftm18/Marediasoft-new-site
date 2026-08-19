import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export async function getAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
}

export function hasRole(session, allowedRoles = ['admin']) {
  const role = session?.user?.role ?? 'admin';
  return allowedRoles.includes(role);
}

export function requireRole(session, allowedRoles = ['admin']) {
  if (!hasRole(session, allowedRoles)) {
    throw new Error('Unauthorized');
  }
  return session;
}
