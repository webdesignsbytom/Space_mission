import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {

  const testAdmin = await dbClient.user.create({
    data: {
      email: 'admin',
      role: 'ADMIN'
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
