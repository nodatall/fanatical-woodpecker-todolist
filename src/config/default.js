module.exports = {
  db: {
    url: process.env.DATABASE_URL,
    options: {
      dialect: 'postgres',
      native: true,
      pool: {
        maxConnections: 5,
        maxIdleTime: 30,
      },
    },
  },
}
