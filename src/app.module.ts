import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//integracao com o mongodb atlas
const uriatlas='mongodb+srv://@cluster0.xczai.mongodb.net/meus-ativos?retryWrites=true&w=majority';
//URILOCAL
const urilocalcontainer='mongodb://localhost/meus-ativos';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ApiModule,
    MongooseModule.forRoot(process.env.URI_MONGO,{
      user: process.env.USUARIO_BANCO_DADOS,
      pass: process.env.SENHA_BANCO_DADOS
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
