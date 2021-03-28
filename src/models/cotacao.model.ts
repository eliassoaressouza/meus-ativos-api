import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as SchemaMongose  } from 'mongoose';

export type CotacaoDocument = CotacaoModel & Document;
@Schema({collection:"cotacao"})
export class CotacaoModel {
  _id:any;
  @Prop()
  public nome: string;
  @Prop()
  valor:number;
}


export const CotacaoSchema = SchemaFactory.createForClass(CotacaoModel);