import { Module } from '@nestjs/common';
import { ElemntService } from './elemnt.service';
import { ElemntController } from './elemnt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elemnt } from './entities/elemnt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Elemnt])],
  controllers: [ElemntController],
  providers: [ElemntService],
})
export class ElemntModule {}
