import { Injectable } from '@nestjs/common';
import { PrismaService } from '@personal-budgeting/api-prisma';

@Injectable()
export class TransactionsService {
  constructor(private prismaService: PrismaService) {}

  findMany() {
    return this.prismaService.transaction.findMany();
  }
}
