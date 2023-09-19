import { Test, TestingModule } from '@nestjs/testing';
import { ElemntService } from './elemnt.service';

describe('ElemntService', () => {
  let service: ElemntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElemntService],
    }).compile();

    service = module.get<ElemntService>(ElemntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
