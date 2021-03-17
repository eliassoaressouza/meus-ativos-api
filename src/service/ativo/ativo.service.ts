import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AtivoDocument, AtivoModel } from 'src/models/ativo.model';
import { UsuarioModel } from 'src/models/usuario.model';

@Injectable()
export class AtivoService {
  constructor(
    @InjectModel(AtivoModel.name)
    private ativoModel: Model<AtivoDocument>,
  ) {}

  async obter(idusuario: string): Promise<AtivoModel[]> {
    const at = new AtivoModel();
    at.idusuario = idusuario;

    return this.ativoModel.find(at).exec();
  }

  async salvar(createAtivo: AtivoModel): Promise<AtivoModel> {
    const createdAtivo = new this.ativoModel(createAtivo);
    const resp = await createdAtivo.save();
    return resp;
  }
  async editar(ativoModel: AtivoModel): Promise<AtivoModel[]> {
    return this.ativoModel.updateOne(
      { _id: ativoModel._id },
      { $set: { descricao: ativoModel.descricao,nome:ativoModel.nome } },
    );
  }
  async excluir(_id: string): Promise<AtivoModel[]> {
    return this.ativoModel.deleteOne({ _id });
  }
}
