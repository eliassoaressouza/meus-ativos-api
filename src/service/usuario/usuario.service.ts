import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';
import { obterAmbiente } from 'src/app.module';


@Injectable()
export class UsuarioService {
  constructor(@InjectModel(UsuarioModel.name) private usuarioModel: Model<UsuarioDocument>) {}

  async salvarUsuario(createUsuario: UsuarioModel): Promise<UsuarioModel> {
    const createdUsuario = new this.usuarioModel(createUsuario);
     const resp=await createdUsuario.save();
     return resp;
  }

  async obterUsuario(UsuarioModel): Promise<UsuarioModel[]> {
    return this.usuarioModel.find(UsuarioModel).exec();
  }
  async obterUsuarioPeloemailSenha(email:string, senha:string): Promise<UsuarioModel[]> {
    console.log('logado########################################')
    console.log(email)
    console.log(senha)

    console.log(obterAmbiente())
    console.log('logado########################################')
    const usuario =await this.usuarioModel.find({email,senha}).exec();
    return usuario;


  }
}
