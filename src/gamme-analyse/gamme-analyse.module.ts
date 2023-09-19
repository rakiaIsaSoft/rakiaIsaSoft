import { Module } from '@nestjs/common';
import { GammeAnalyseService } from './gamme-analyse.service';
import { GammeAnalyseController } from './gamme-analyse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Gamme } from 'src/gamme/entities/gamme.entity';
import { Analyse } from 'src/analyse/entities/analyse.entity';
import { GammeAnalyse } from './entities/gamme-analyse.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([GammeAnalyse]), // Register the GammeAnalyse entity
    TypeOrmModule.forFeature([Gamme]), // Import and gamme GammeModule
    TypeOrmModule.forFeature([Analyse]), // Import and analyse AnalyseModule
  ],
  controllers: [GammeAnalyseController],
  providers: [GammeAnalyseService],
})
export class GammeAnalyseModule {}
