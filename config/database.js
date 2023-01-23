module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce8eiah4rebc7fjcfh70-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_2o1j'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '8yk8MrYo1uXSctjEbK9eDN95HuZa885B'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
