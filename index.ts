import express, { Express, Request, Response } from 'express';
require("dotenv").config()
const moesif = require('moesif-nodejs');
import DbConnect from './database/Database';


const moesifMiddleware = moesif({
    applicationId: 'eyJhcHAiOiI0ODc6MzQ0IiwidmVyIjoiMi4wIiwib3JnIjoiNDIwOjMxNCIsImlhdCI6MTY1NjYzMzYwMH0.6z3DYrwMK2u87zMqVrXKjGnjtkc9q4jWleQZVGQrYjk',

});

const app: Express = express();
const port = process.env.PORT;

app.use(moesifMiddleware);
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
});

DbConnect();

app.listen(port, () => {

    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});