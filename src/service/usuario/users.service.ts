import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioDocument, UsuarioModel } from 'src/models/usuario.model';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectModel(UsuarioModel.name)
    private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async obterUsuarioPeloemailSenha(
    email: string,
    senha: string,
  ): Promise<UsuarioModel[]> {
    const usuario = await this.usuarioModel.find({ email, senha }).exec();
    return usuario;
  }
}
