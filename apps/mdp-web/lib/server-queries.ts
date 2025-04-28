'use server';

import { getProfile as apiGetProfile } from '@/lib/api-client';
import { logActivity as apiLogActivity } from './api-client/_generated';
import { withAuth } from './utils';
import { logout } from '@/lib/api-client';

export const getProfile = withAuth(apiGetProfile);
export const logActivity = withAuth(apiLogActivity);
export const logOut = withAuth(logout);
