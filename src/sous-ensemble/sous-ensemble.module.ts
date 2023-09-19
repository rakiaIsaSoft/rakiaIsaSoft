import { Module } from '@nestjs/common';
import { SousEnsembleService } from './sous-ensemble.service';
import { SousEnsembleController } from './sous-ensemble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SousEnsemble } from './entities/sous-ensemble.entity';

@Module({

  imports: [TypeOrmModule.forFeature([SousEnsemble])],
  controllers: [SousEnsembleController],
  providers: [SousEnsembleService],
})
export class SousEnsembleModule {}
