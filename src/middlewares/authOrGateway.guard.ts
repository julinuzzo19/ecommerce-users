import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { GatewayGuard } from './gateway.guard';

@Injectable()
export class AuthOrGatewayGuard implements CanActivate {
  constructor(
    private authGuard: AuthGuard,
    private gatewayGuard: GatewayGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Intenta primero con GatewayGuard (más rápido, no es async)
    try {
      const isGatewayValid = this.gatewayGuard.canActivate(context);
      if (isGatewayValid) {
        return true;
      }
    } catch {
      // Gateway falló, intenta con AuthGuard
    }

    // Intenta con AuthGuard
    try {
      const isAuthValid = await this.authGuard.canActivate(context);
      if (isAuthValid) {
        return true;
      }
    } catch {
      // Auth también falló
    }

    // Ninguno funcionó
    throw new UnauthorizedException(
      'Authentication required: provide valid JWT token or gateway secret',
    );
  }
}
