import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_REFLECT_NAME } from '../constants';

@Injectable()
export class AccessControlGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler();
    const controller = context.getClass();

    const requiredPermissionFromHandler = this.reflector.get<string>(PERMISSIONS_REFLECT_NAME, handler);
    const requiredPermissionFromController = this.reflector.get<string>(PERMISSIONS_REFLECT_NAME, controller);
    const requiredPermission = requiredPermissionFromHandler || requiredPermissionFromController;

    if (!requiredPermission) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const allowedPermissions = [
      'feedback-cycle:read'
    ];

    return allowedPermissions.includes(requiredPermission);
  }
}
