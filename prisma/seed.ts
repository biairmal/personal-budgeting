import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      password: 'password',
      firstName: 'User',
      transactions: {
        create: [

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
        ]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Successfully seeded database!');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
