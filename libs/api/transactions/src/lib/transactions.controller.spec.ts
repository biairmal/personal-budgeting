import { Test } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

describe('TransactionsController', () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransactionsService],
      controllers: [TransactionsController],
    }).compile();

    controller = module.get(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
