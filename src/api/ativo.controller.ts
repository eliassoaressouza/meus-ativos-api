import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';

@Controller('ativo')
export class AtivoController {
  constructor(private usuarioService: UsuarioService) {}
  @Post('/obter')
  async obterUsuario(@Body() objectid) {
    const usuario = new UsuarioModel();
    usuario.nome = 'Roberto';
    usuario.email = 'eliassoares@gmail.com';
    usuario.ativos.push({ nome: 'Itausa' });
    return await this.usuarioService.obterUsuarioPeloId(objectid.id);
  }
}
