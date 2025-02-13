import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';

import { APIError, AuthenticatedRequest } from 'libs/core/models';

import { AuthService } from './auth.service';
import { AuthGuard } from 'libs/core/guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login-cas')
  async loginCas(
    @Query('ticket') ticket: string,
    @Query('redirectUrl') redirectUrl: string,
  ) {
    if (!ticket || !redirectUrl)
      throw new APIError('Missing ticket or redirectUrl');

    return await this.authService.loginCas(ticket, redirectUrl);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@Req() req: AuthenticatedRequest) {
    return {
      login: req.login,
      userData: req.userData,
    }; // TODO: also return if the user is an admin by qweerying the collections 'admins' with req.login
  }
}
