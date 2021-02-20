import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AtivoService } from './service/ativo.service';


//integracao com o mongodb atlas
const optionsatlas = {
  user: 'sistema-ess',
  pass: '12345t'
}
const urlatlas='mongodb+srv://@cluster0.xczai.mongodb.net/meus-ativos?retryWrites=true&w=majority';


const optionscontainer = {
  user: 'mongoess2',
  pass: 'e55tt6'
}
const urlcontainer='mongodb://localhost/meus-ativos';
@Module({
  imports: [ApiModule,
    MongooseModule.forRoot(urlcontainer,optionscontainer)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
