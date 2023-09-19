import { Module } from '@nestjs/common';
import { GammeService } from './gamme.service';
import { GammeController } from './gamme.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Gamme } from './entities/gamme.entity';


@Module({

  imports: [TypeOrmModule.forFeature([Gamme])],
  controllers: [GammeController],
  providers: [GammeService],
})
export class GammeModule {}
