import { Test, TestingModule } from '@nestjs/testing';
import { GammeAnalyseService } from './gamme-analyse.service';

describe('GammeAnalyseService', () => {
  let service: GammeAnalyseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GammeAnalyseService],
    }).compile();

    service = module.get<GammeAnalyseService>(GammeAnalyseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
