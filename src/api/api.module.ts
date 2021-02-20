import { Module } from '@nestjs/common';

import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModel, UsuarioSchema } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';
import { AtivoController } from './ativo.controller';
import { AtivoService } from 'src/service/ativo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsuarioModel.name, schema: UsuarioSchema }])],
  providers: [UsuarioService,AtivoService],
  controllers: [UsuarioController, AtivoController]
})
export class ApiModule {}
