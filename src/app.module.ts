import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


 function obterAmbiente():{uri,usuario,senha} {
  let resp = {uri:'',usuario:'',senha:''};
  if (process.env.NODE_ENV == 'production') {
    resp = {
      uri: process.env.URI_MONGO_ATLAS,
      usuario: process.env.USUARIO_BANCO_DADOS_ATLAS,
      senha: process.env.SENHA_BANCO_DADOS_ATLAS,
    };
  }else{
    resp = {
      uri: process.env.URI_MONGO_LOCAL,
      usuario: process.env.USUARIO_BANCO_DADOS_LOCAL,
      senha: process.env.SENHA_BANCO_DADOS_LOCAL,
    };
  }
 
  return resp;
};
@Module({
  imports: [
    ApiModule,
    AuthModule, UsersModule,
    ConfigModule.forRoot(),
    
    MongooseModule.forRoot(obterAmbiente().uri, {
      user: obterAmbiente().usuario,
      pass:  obterAmbiente().senha,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
