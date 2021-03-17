import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/usuario/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioModel } from 'src/models/usuario.model';



@Injectable()
export class AuthService {
  constructor(
    
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.obterUsuarioPeloemailSenha(username,pass);
    if (user[0] && user[0].senha === pass) {
     
      return user[0];
    }
    return null;
  }

  async login(userdoc: any) {
    const payload = { id: userdoc.id, nome: userdoc.nome,email:userdoc.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  decodeJwt(auth: string): {id: string}{
    const jwt = auth.replace('Bearer ', '');
    return this.jwtService.decode(jwt, { json: true }) as { id: string };
    
}
ObterIdUsuario(authJwt: string):string{

  return this.decodeJwt(authJwt).id;
}



}
