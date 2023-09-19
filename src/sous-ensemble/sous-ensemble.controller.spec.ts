import { Test, TestingModule } from '@nestjs/testing';
import { SousEnsembleController } from './sous-ensemble.controller';
import { SousEnsembleService } from './sous-ensemble.service';

describe('SousEnsembleController', () => {
  let controller: SousEnsembleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SousEnsembleController],
      providers: [SousEnsembleService],
    }).compile();

    controller = module.get<SousEnsembleController>(SousEnsembleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
