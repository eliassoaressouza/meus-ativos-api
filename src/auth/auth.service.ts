import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.obterUsuarioPeloemailSenha(username,pass);
    if (user[0] && user[0].senha === pass) {
      const { senha, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
