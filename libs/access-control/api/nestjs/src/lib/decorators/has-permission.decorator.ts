import { ReflectMetadata } from '@nestjs/common';
import { PERMISSIONS_REFLECT_NAME } from '../constants';

export const HasPermission = (requiredPermission: string) => ReflectMetadata(PERMISSIONS_REFLECT_NAME, requiredPermission)
