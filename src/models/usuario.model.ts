import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AtivoModel } from './ativo.model';

export type UsuarioDocument = UsuarioModel & Document;

@Schema({collection:"usuario"})
export class UsuarioModel {
  _id:any;
  @Prop()
  public nome: string;
  @Prop()
  public email: string;
  @Prop()
  public senha: string;
  @Prop()
  public ativos: AtivoModel[]=[];
}
export const UsuarioSchema = SchemaFactory.createForClass(UsuarioModel);