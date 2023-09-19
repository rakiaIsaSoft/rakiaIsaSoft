import { Module } from '@nestjs/common';
import { AnalyseElemntService } from './analyse-elemnt.service';
import { AnalyseElemntController } from './analyse-elemnt.controller';
import { AnalyseElemnt } from './entities/analyse-elemnt.entity';
import { Analyse } from 'src/analyse/entities/analyse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elemnt } from 'src/elemnt/entities/elemnt.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([AnalyseElemnt,Analyse,Elemnt]), // Register theAnalyseElemnt entity
    //TypeOrmModule.forFeature([Analyse]), // Import and Analyse AnalyseModule
    //TypeOrmModule.forFeature([Element]), // Import and Element ElementModule
  ],
  controllers: [AnalyseElemntController],
  providers: [AnalyseElemntService],
})
export class AnalyseElemntModule {}
