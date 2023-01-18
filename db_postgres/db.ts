import  {Sequelize} from'sequelize-typescript'
import {PostgreSQL} from "../config"


export const db = new Sequelize(PostgreSQL.database,PostgreSQL.username,PostgreSQL.password,{
    host:"localhost",
    dialect:"postgres",
    port:5432
})