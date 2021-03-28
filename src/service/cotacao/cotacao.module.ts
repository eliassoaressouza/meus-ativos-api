import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CotacaoModel, CotacaoSchema } from 'src/models/cotacao.model';
import { CotacaoService } from './cotacao.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: CotacaoModel.name, schema: CotacaoSchema }])],
  providers: [CotacaoService],
  exports: [CotacaoService],
})
export class CotacaosModule {}
