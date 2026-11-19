

const ENV = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.SECRET || 'secret',
    POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "123456",
    POSTGRES_DB: process.env.POSTGRES_DB || 'sgr',
    POSTGRES_PORT: process.env.POSTGRES_PORT || "5433",
    POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost",
}

export default ENV;