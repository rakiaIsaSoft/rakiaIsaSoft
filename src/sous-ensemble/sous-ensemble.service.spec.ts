import { Test, TestingModule } from '@nestjs/testing';
import { SousEnsembleService } from './sous-ensemble.service';

describe('SousEnsembleService', () => {
  let service: SousEnsembleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SousEnsembleService],
    }).compile();

    service = module.get<SousEnsembleService>(SousEnsembleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
