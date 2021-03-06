import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModel, UsuarioSchema } from 'src/models/usuario.model';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UsuarioModel.name, schema: UsuarioSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
