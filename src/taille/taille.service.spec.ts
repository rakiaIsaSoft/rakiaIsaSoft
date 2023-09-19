import { Test, TestingModule } from '@nestjs/testing';
import { TailleService } from './taille.service';

describe('TailleService', () => {
  let service: TailleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TailleService],
    }).compile();

    service = module.get<TailleService>(TailleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
