import { Controller, Get, Post, UseGuards,Request, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {

    const login =await this.authService.login(req.user);
   //res.headers.set('eee','123');
    
    return login;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
