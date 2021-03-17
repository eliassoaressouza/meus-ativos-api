import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AtivoModel } from 'src/models/ativo.model';
import { AtivoService } from 'src/service/ativo/ativo.service';

@Controller('ativo')
export class AtivoController {
  constructor(
    private ativoService: AtivoService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/obter')
  async obter(@Headers('Authorization') auth: string) {
    const idusuario = this.authService.ObterIdUsuario(auth);
    return await this.ativoService.obter(idusuario);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/salvar')
  async salvar(
    @Body() ativoModel: AtivoModel,
    @Headers('Authorization') auth: string,
  ) {
    ativoModel.idusuario = this.authService.ObterIdUsuario(auth);

    return await this.ativoService.salvar(ativoModel);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/editar')
  async editar(
    @Body() ativoModel: AtivoModel,
    @Headers('Authorization') auth: string,
  ) {
    return await this.ativoService.editar(ativoModel);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/excluir')
  async excluir(@Body() id: any) {
    const id6 = id;

    return await this.ativoService.excluir(id);
  }
}
