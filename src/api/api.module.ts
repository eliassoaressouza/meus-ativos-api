import { Module } from '@nestjs/common';

import { UsuarioController } from './usuario/usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModel, UsuarioSchema } from 'src/models/usuario.model';
import { UsuarioService } from 'src/service/usuario.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: UsuarioModel.name, schema: UsuarioSchema }])],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class ApiModule {}
