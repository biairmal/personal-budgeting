import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = [
  {
    amount: 15000,
    type: 'expense',
    category: 'transportation',
    note: 'Gojek',
    description: 'Test',
    date: new Date(),
},
{
    amount: 30000,
    type: 'expense',
    category: 'transportation',
    note: 'Grab Car',
    description: 'Test',
    date: new Date(),
},
{
    amount: 25000,
    type: 'expense',
    category: 'food',
    note: 'Gofood',
    description: 'Test',
    date: new Date(),
  },
];

async function main() {
  for (let i of data) {
    await prisma.transaction.create({ data: i });
  }
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    console.log('Successfully seed database!');
    prisma.$disconnect();
  });
