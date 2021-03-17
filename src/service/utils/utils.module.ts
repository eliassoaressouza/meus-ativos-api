import { Module } from '@nestjs/common';
import { JwtUtilsService } from './jwt.utils.service';

@Module({
 
  providers: [JwtUtilsService],
  exports:[JwtUtilsService]
})
export class UtilsModule {}
