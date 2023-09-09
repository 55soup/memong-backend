import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // dotenv
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardController } from './board/board.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController, BoardController],
  providers: [AppService],
})
export class AppModule {}
