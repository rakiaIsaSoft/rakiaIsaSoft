import { Module } from '@nestjs/common';
import { MacroElementService } from './macro-element.service';
import { MacroElementController } from './macro-element.controller';
import { MacroElement } from './entities/macro-element.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MacroElement])],
  controllers: [MacroElementController],
  providers: [MacroElementService],
})
export class MacroElementModule {}
