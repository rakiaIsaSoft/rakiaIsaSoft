import { Test, TestingModule } from '@nestjs/testing';
import { AnalyseElemntService } from './analyse-elemnt.service';

describe('AnalyseElemntService', () => {
  let service: AnalyseElemntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyseElemntService],
    }).compile();

    service = module.get<AnalyseElemntService>(AnalyseElemntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
