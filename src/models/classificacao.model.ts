import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongose } from 'mongoose';

export type ClassificacaoDocument = ClassificacaoModel & Document;

@Schema({ collection: 'classificacao' })
export class ClassificacaoModel {
  _id: any;
  @Prop()
  public nome: string;
  
  @Prop()
  public tipo: string[];
}
export const ClassificacaoSchema = SchemaFactory.createForClass(
  ClassificacaoModel,
);
