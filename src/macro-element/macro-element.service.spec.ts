import { Test, TestingModule } from '@nestjs/testing';
import { MacroElementService } from './macro-element.service';

describe('MacroElementService', () => {
  let service: MacroElementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacroElementService],
    }).compile();

    service = module.get<MacroElementService>(MacroElementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
