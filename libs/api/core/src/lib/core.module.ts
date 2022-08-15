import { Module } from '@nestjs/common';
import { PrismaModule } from '@personal-budgeting/api-prisma';
import { TransactionsModule } from '@personal-budgeting/api-transactions';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [PrismaModule, TransactionsModule],
})
export class CoreModule {}
