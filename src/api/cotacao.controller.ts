import { Controller, UseGuards, Headers, Get, Body, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CotacaoModel } from 'src/models/cotacao.model';
import { CotacaoService } from 'src/service/cotacao/cotacao.service';

@Controller('cotacao')
export class CotacaoController {
  constructor(
    private CotacaoService: CotacaoService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/obter')
  async obter(@Headers('Authorization') auth: string) {
    const idusuario = this.authService.ObterIdUsuario(auth);
    return await this.CotacaoService.obter();
  }
  @Post('/salvareditar')
  async salvareditar( @Body() listaCotacao: CotacaoModel[]) {
  
    
    return await this.CotacaoService.salvareditar(listaCotacao);
  }
}
