import { Test, TestingModule } from '@nestjs/testing';
import { ElemntController } from './elemnt.controller';
import { ElemntService } from './elemnt.service';

describe('ElemntController', () => {
  let controller: ElemntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElemntController],
      providers: [ElemntService],
    }).compile();

    controller = module.get<ElemntController>(ElemntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
