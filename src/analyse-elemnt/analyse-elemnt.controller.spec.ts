import { Test, TestingModule } from '@nestjs/testing';
import { AnalyseElemntController } from './analyse-elemnt.controller';
import { AnalyseElemntService } from './analyse-elemnt.service';

describe('AnalyseElemntController', () => {
  let controller: AnalyseElemntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyseElemntController],
      providers: [AnalyseElemntService],
    }).compile();

    controller = module.get<AnalyseElemntController>(AnalyseElemntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
