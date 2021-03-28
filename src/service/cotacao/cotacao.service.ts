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

 
}
