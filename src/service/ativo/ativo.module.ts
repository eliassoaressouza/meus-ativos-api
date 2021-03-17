import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AtivoModel, AtivosSchema } from 'src/models/ativo.model';
import { AtivoService } from './ativo.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: AtivoModel.name, schema: AtivosSchema }])],
  providers: [AtivoService],
  exports: [AtivoService],
})
export class AtivosModule {}
