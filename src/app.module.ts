import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
//mongodb+srv://mongo_ess:3%24rreeatlas1%21234@cluster0.xczai.mongodb.net/test?authSource=admin&replicaSet=atlas-hxu1tj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
const options = {
 
  user: 'mongoess2',
  pass: 'e55tt6'
}
@Module({
  imports: [ApiModule,
    MongooseModule.forRoot('mongodb://localhost/meus-ativos',options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
