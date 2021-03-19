import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario/usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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
    console.log('login do usuario!!!')
    const usuarioresp = await this.usuarioService.obterUsuarioPeloemailSenha(
      usuario.email,
      usuario.senha,
    );
    console.log(usuarioresp)
    if (!usuarioresp.length) {
      throw new HttpException("Usuario não encontrado", HttpStatus.CONFLICT);
    
    }
    
    return usuarioresp;
  }
  /**
   * 
   * @param usuario 
   * obter pelo json:
   * {
  "ativos": [],
  "_id": "60438e25fd4c0738e092e0aa",
  "email": "mariaj@gmail.com",
  "senha": "3e4r5tttt",
  "nome": "Maria Josefina",
  "__v": 0
}
   */
  @UseGuards(JwtAuthGuard)
  @Post('/obter')
  async salvar(@Body() usuario: UsuarioModel) {
    return await this.usuarioService.obterUsuario(usuario);
  }
}
