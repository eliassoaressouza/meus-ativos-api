import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CotacaoDocument, CotacaoModel } from 'src/models/cotacao.model';


@Injectable()
export class CotacaoService {
  constructor(
    @InjectModel(CotacaoModel.name)
    private CotacaoModel: Model<CotacaoDocument>,
  ) {}

  async obter(): Promise<CotacaoModel[]> {
    return this.CotacaoModel.find().exec();
  }

  async salvareditar(listacotacao: CotacaoModel[]) {
    const listadobd = await this.CotacaoModel.find().exec();
    if (!listadobd.length) {
      listacotacao.forEach((cotacao) => {
        const createdCotacao = new this.CotacaoModel(cotacao);
        createdCotacao.save();
      });
    } else {
      //percorre pelos ativos
          for (let index = 0; index < listacotacao.length; index++) {
            //verifica se ja existe
            const element = listacotacao[index];
            if(listadobd.find(c=>c.Ativo==listacotacao[index].Ativo)){
            await this.CotacaoModel.updateOne(
              {Ativo:listacotacao[index].Ativo },
              { $set: { Cotacao: listacotacao[index].Cotacao } },
            );
            }else{
              const createdCotacao = new this.CotacaoModel(listacotacao[index]);
              createdCotacao.save();
            }
          } 
          const listadobd2 = await this.CotacaoModel.find().exec();
      return listadobd2;
    }
  }

}
