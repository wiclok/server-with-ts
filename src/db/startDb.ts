import { sequelize } from './connection';

export function startDb() {
  sequelize
    .sync()
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
}
