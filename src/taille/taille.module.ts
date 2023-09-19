import { Module } from '@nestjs/common';
import { TailleService } from './taille.service';
import { TailleController } from './taille.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taille } from './entities/taille.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taille])],
  controllers: [TailleController],
  providers: [TailleService],
})
export class TailleModule {}
