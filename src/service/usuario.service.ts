import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';
import { CreateUsuarioDTO } from 'src/dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(UsuarioModel.name) private usuarioModel: Model<UsuarioDocument>) {}

  async create(createUsuario: CreateUsuarioDTO): Promise<UsuarioModel> {
    const createdUsuario = new this.usuarioModel(createUsuario);
    return createdUsuario.save();
  }

  async findAll(): Promise<UsuarioModel[]> {
    return this.usuarioModel.find().exec();
  }
}
