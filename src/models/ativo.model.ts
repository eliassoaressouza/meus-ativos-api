import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as SchemaMongose  } from 'mongoose';


export type AtivoDocument = AtivoModel & Document;

@Schema({collection:"ativos"})
export class AtivoModel {
  _id:any;
  @Prop()
  public nome: string;
  @Prop()
  quantidade:number;
  @Prop()
  public descricao: string;
  @Prop()
  idusuario: string;
  //idusuario: [{ type: SchemaMongose.Types.ObjectId, ref: 'usuario'}]
  @Prop()
  classificacao: [];


}


export const AtivosSchema = SchemaFactory.createForClass(AtivoModel);