import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';
import { AtivoModel } from 'src/models/ativo.model';

@Injectable()
export class AtivoService {
    constructor(@InjectModel(UsuarioModel.name) private usuarioModel: Model<UsuarioDocument>) {}

    async cadastrarAtivo(usuario_id:string,ativo:AtivoModel): Promise<UsuarioModel[]> {

        return this.usuarioModel.updateOne({_id:usuario_id},{$push:{"ativos":ativo}});
      }
}
