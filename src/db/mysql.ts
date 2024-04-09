import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

export const sequelize = new Sequelize(
    'teste',
    'root',
    '', //DB password,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
);