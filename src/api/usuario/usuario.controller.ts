import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AtivoModel } from 'src/models/ativo.model';

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
    usuario.ativo.push({nome:'Itausa'})
    await  this.usuarioService.salvarUsuario(usuario);
    return 'teste';
  }
  /**post: objectid={id:60312249a149de30d07eead2} */
  @Post('/obter')
  async obterUsuario(@Body()objectid) {
   
   
    const usuario = new UsuarioModel();
    usuario.nome="Roberto";
    usuario.email="eliassoares@gmail.com";
    usuario.ativo.push({nome:'Itausa'})
    return await  this.usuarioService.obterUsuarioPeloId(objectid.id);
  }




}
