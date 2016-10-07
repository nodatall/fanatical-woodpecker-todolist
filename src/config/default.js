module.exports = {
  appName: 'To Do App',
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DATABASE_URL,
    options: {
      dialect: 'postgres',
      native: true,
      pool: {
        maxConnections: 5,
        maxIdleTime: 30,
      },
      logging: false,
    },
  },
  auth: {
    cookieName: 'todo_user',
    cookieSecret: process.env.AUTH_SECRET || 'mysecretyo',
  },
}
