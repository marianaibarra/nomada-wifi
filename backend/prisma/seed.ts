import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();
import { faker, simpleFaker } from '@faker-js/faker';

async function main() {
  const numberOfRecordsToCreate = 10;

  console.log(`Creating ${numberOfRecordsToCreate} records...`);
  for (let index = 0; index < numberOfRecordsToCreate; index++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: 'this-is-a-password',
        username: faker.internet.username(),
      },
    });

    console.log(`Created user ${user.id}`);
  }

  console.log(`Created ${numberOfRecordsToCreate} records.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
