import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';
import { AtivoModel } from 'src/models/ativo.model';
import { unirest } from 'unirest';
@Injectable()
export class AtivoService {
  constructor(
    @InjectModel(UsuarioModel.name)
    private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async salvar(usuarioModel: UsuarioModel): Promise<UsuarioModel[]> {
    return this.usuarioModel.updateOne(
      { _id: usuarioModel._id },
      { $push: { ativos: usuarioModel.ativos[0] } },
    );
  }
  async editar(usuarioModel: UsuarioModel): Promise<UsuarioModel[]> {
    return this.usuarioModel.updateOne(
      { _id: usuarioModel._id },
      { $set: { ativos: usuarioModel.ativos } },
    );
  }
  
}
