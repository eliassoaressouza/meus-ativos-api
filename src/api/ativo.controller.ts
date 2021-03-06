import { Body, Controller, Post } from '@nestjs/common';
import { AtivoModel } from 'src/models/ativo.model';
import { UsuarioModel } from 'src/models/usuario.model';
import { AtivoService } from 'src/service/ativo.service';
import { UsuarioService } from 'src/service/usuario.service';

@Controller('ativo')
export class AtivoController {
  constructor(private ativoService: AtivoService) {}
  @Post('/salvar')
  async salvar(@Body() usuarioModel:UsuarioModel) {

    return await this.ativoService.salvar(usuarioModel);
  }
  
  @Post('/editar')
  async editar(@Body() usuarioModel:UsuarioModel) {

    return await this.ativoService.editar(usuarioModel);
  }
  
  
}
