import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('/cadastro')
  async cadastro(@Body() usuario) {
    const usuarioresp = this.usuarioService.salvarUsuario(usuario);

    return usuarioresp;
  }
  @Post('/login')
  async login(@Body() usuario) {
    const usuarioresp = await this.usuarioService.obterUsuarioPeloemailSenha(
      usuario.email,
      usuario.senha,
    );
    if (!usuarioresp.length) {
      //throw new Error('Usuario não encontrado');
      
    }
    return usuarioresp;
  }
}
