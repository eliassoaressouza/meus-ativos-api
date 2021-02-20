import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(UsuarioModel.name) private usuarioModel: Model<UsuarioDocument>) {}

  async salvarUsuario(createUsuario: UsuarioModel): Promise<UsuarioModel> {
    const createdUsuario = new this.usuarioModel(createUsuario);
    return createdUsuario.save();
  }

  async obterUsuarioPeloId(usuario_id:string): Promise<UsuarioModel[]> {
    return this.usuarioModel.find({_id:usuario_id}).exec();
  }
}
