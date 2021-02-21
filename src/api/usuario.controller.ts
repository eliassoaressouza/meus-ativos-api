import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';
import { Response } from 'express';
import { ApiUtils } from './api.utils';
@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/cadastro')
  async cadastro(@Body() usuario) {
    const usuarioresp = await this.usuarioService.salvarUsuario(usuario);

    return usuarioresp;
  }
  @Post('/login')
  async login(@Body() usuario) {
    const usuarioresp = await this.usuarioService.obterUsuarioPeloemailSenha(
      usuario.email,
      usuario.senha,
    );
    if (!usuarioresp.length) {
      throw new HttpException("Usuario não encontrado", HttpStatus.CONFLICT);
    
    }
    
    return usuarioresp;
  }
  @Post('/obter')
  async salvar(@Body() objectid) {
    return await this.usuarioService.obterUsuarioPeloId(objectid.id);
  }
}
