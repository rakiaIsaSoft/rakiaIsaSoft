import { Test, TestingModule } from '@nestjs/testing';
import { TailleController } from './taille.controller';
import { TailleService } from './taille.service';

describe('TailleController', () => {
  let controller: TailleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TailleController],
      providers: [TailleService],
    }).compile();

    controller = module.get<TailleController>(TailleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
