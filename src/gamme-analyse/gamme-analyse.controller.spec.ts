import { Test, TestingModule } from '@nestjs/testing';
import { GammeAnalyseController } from './gamme-analyse.controller';
import { GammeAnalyseService } from './gamme-analyse.service';

describe('GammeAnalyseController', () => {
  let controller: GammeAnalyseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GammeAnalyseController],
      providers: [GammeAnalyseService],
    }).compile();

    controller = module.get<GammeAnalyseController>(GammeAnalyseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
