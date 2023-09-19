import { Test, TestingModule } from '@nestjs/testing';
import { MacroElementController } from './macro-element.controller';
import { MacroElementService } from './macro-element.service';

describe('MacroElementController', () => {
  let controller: MacroElementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacroElementController],
      providers: [MacroElementService],
    }).compile();

    controller = module.get<MacroElementController>(MacroElementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
