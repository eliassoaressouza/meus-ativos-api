import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClassificacaoDocument, ClassificacaoModel } from 'src/models/Classificacao.model';


@Injectable()
export class ClassificacaoService {
  constructor(
    @InjectModel(ClassificacaoModel.name)
    private ClassificacaoModel: Model<ClassificacaoDocument>,
  ) {}

  async obter(): Promise<ClassificacaoModel[]> {
    const at = new ClassificacaoModel();
  

    return this.ClassificacaoModel.find().exec();
  }

  async salvar(createClassificacao: ClassificacaoModel): Promise<ClassificacaoModel> {
    const createdClassificacao = new this.ClassificacaoModel(createClassificacao);
    const resp = await createdClassificacao.save();
    return resp;
  }
  async editar(ClassificacaoModel: ClassificacaoModel): Promise<ClassificacaoModel[]> {
    return this.ClassificacaoModel.updateOne(
      { _id: ClassificacaoModel._id },
      {
        $set: {
          tipo: ClassificacaoModel.tipo,
          nome: ClassificacaoModel.nome
        },
      },
    );
  }
  async excluir(_id: string): Promise<ClassificacaoModel[]> {
    return this.ClassificacaoModel.deleteOne({ _id });
  }
}
