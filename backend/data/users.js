import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Ahzam Salik',
    email: 'ahzam@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Muhammad Maaz',
    email: 'maaz@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maaz Bhai',
    email: 'maazbhai@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
