import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { Machine } from './entities/machine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [TypeOrmModule.forFeature([Machine])], 
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}
