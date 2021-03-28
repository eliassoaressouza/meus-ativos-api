import { Module } from '@nestjs/common';

import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModel, UsuarioSchema } from 'src/models/usuario.model';
import { AtivoController } from './ativo.controller';
import { AtivoService } from 'src/service/ativo/ativo.service';
import { UsuarioService } from 'src/service/usuario/usuario.service';
import { AtivoModel, AtivosSchema } from 'src/models/ativo.model';
import { AuthModule } from 'src/auth/auth.module';
import { ClassificacaoService } from 'src/service/classificacao/classificacao.service';
import {
  ClassificacaoModel,
  ClassificacaoSchema,
} from 'src/models/classificacao.model';
import { ClassificacaoController } from './classificacao.controller';
import { ClassificacaoModule } from 'src/service/classificacao/classificacao.module';
import { CotacaoService } from 'src/service/cotacao/cotacao.service';
import { CotacaoController } from './cotacao.controller';
import { CotacaoModel, CotacaoSchema } from 'src/models/cotacao.model';

@Module({
  imports: [
    ClassificacaoModule,
    MongooseModule.forFeature([
      { name: UsuarioModel.name, schema: UsuarioSchema },
    ]),
    MongooseModule.forFeature([
      { name: AtivoModel.name, schema: AtivosSchema },
    ]),
    MongooseModule.forFeature([
      { name: ClassificacaoModel.name, schema: ClassificacaoSchema },
    ]),
    MongooseModule.forFeature([
      { name: CotacaoModel.name, schema: CotacaoSchema },
    ]),
    AuthModule,
  ],

  providers: [UsuarioService, AtivoService, ClassificacaoService,CotacaoService],
  controllers: [UsuarioController, AtivoController, ClassificacaoController,CotacaoController],
})
export class ApiModule {}
