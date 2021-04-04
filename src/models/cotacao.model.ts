import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as SchemaMongose  } from 'mongoose';

export type CotacaoDocument = CotacaoModel & Document;
@Schema({collection:"cotacao"})
export class CotacaoModel {
  _id:any;
  @Prop()
  public Ativo: string;
  @Prop()
  Cotacao:string;
}


export const CotacaoSchema = SchemaFactory.createForClass(CotacaoModel);