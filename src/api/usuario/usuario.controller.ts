import { Controller, Get, Post } from '@nestjs/common';

import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';

@Controller('usuario')
export class UsuarioController {

constructor(private usuarioService:UsuarioService){
  
}

  @Get()
  async teste() {
   
    const usuario = new UsuarioModel();
    usuario.nome="Roberto";
    usuario.email="eliassoares@gmail.com";
    await  this.usuarioService.create(usuario);
    return 'teste';
  }

  @Post()
  login(login: string, senha: string) {
   
    const usuario = new UsuarioModel();
    usuario.nome = '44556647';
    return usuario;
  }
}
