# StudentsProject

StudentsProject - this is an RPG game where the user can register, select a character class and communicate with players in a dynamic chat, attack, use other abilities.

This project uses 2 Database, Postgres and Mongodb,

To run this project do the following:

- compile the repository to yourself
- in the terminal, specify the command **"npm i"**, to connect all the libraries
- you must create a "build" folder in the main project
- create a "config" folder and following the example below, specify your data to connect to the database:

export const jwtSecret = "your secret key"
export class PostgreSQL{
    static username: string = "postgres"
    static password: string = "password"
    static host: string = "localhost"
    static port: number = 5432
    static database:string = "StudentsProject"
    static dialect: string = "postgres"
    static mongodb:string ="mongodb://localhost:27017/StudentsProject"
}

- create .env, also in the main project and put the line there:

DATABASE_URL="postgres://postgres:password@localhost:5432/StudentsProject"

- in order for all tables to be loaded into postgres, specify this command **"npm run migrate up"** 
- after which you need to write **"npm run build"** in the terminal - this will build the project
- final command **"npm run start"**

After it, you can open the postman, test all the crud requests, create several WebSocket Requests (insert an active jwt token there, register events) and enjoy the game)

