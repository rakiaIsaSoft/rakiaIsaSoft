import { Module } from '@nestjs/common';
import { AnalyseService } from './analyse.service';
import { AnalyseController } from './analyse.controller';


import { TypeOrmModule } from '@nestjs/typeorm';
import { Analyse } from './entities/analyse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Analyse])],
  controllers: [AnalyseController],
  providers: [AnalyseService],
})
export class AnalyseModule {}
