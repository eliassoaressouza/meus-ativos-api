import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassificacaoModel, ClassificacaoSchema } from 'src/models/classificacao.model';
import { ClassificacaoService } from './classificacao.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ClassificacaoModel.name, schema: ClassificacaoSchema }])],
  providers: [ClassificacaoService],
  exports: [ClassificacaoService],
})
export class ClassificacaoModule {}
