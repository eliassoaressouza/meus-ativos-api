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
import { ClassificacaoModel } from 'src/models/classificacao.model';
import { ClassificacaoService } from 'src/service/classificacao/classificacao.service';

@Controller('classificacao')
export class ClassificacaoController {
  constructor(
    private ClassificacaoService: ClassificacaoService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/obter')
  async obter(@Headers('Authorization') auth: string) {
    const idusuario = this.authService.ObterIdUsuario(auth);
    return await this.ClassificacaoService.obter();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/salvar')
  async salvar(
    @Body() ClassificacaoModel: ClassificacaoModel,
    @Headers('Authorization') auth: string,
  ) {
    return await this.ClassificacaoService.salvar(ClassificacaoModel);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/editar')
  async editar(
    @Body() ClassificacaoModel: ClassificacaoModel,
    @Headers('Authorization') auth: string,
  ) {
    return await this.ClassificacaoService.editar(ClassificacaoModel);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/excluir')
  async excluir(@Body() id: any) {
    return await this.ClassificacaoService.excluir(id);
  }
}
