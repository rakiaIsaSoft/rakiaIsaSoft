import { Test, TestingModule } from '@nestjs/testing';
import { GammeController } from './gamme.controller';
import { GammeService } from './gamme.service';

describe('GammeController', () => {
  let controller: GammeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GammeController],
      providers: [GammeService],
    }).compile();

    controller = module.get<GammeController>(GammeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
