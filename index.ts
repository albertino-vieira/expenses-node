import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const moesif = require('moesif-nodejs');

const moesifMiddleware = moesif({
    applicationId: 'eyJhcHAiOiI0ODc6MzQ0IiwidmVyIjoiMi4wIiwib3JnIjoiNDIwOjMxNCIsImlhdCI6MTY1NjYzMzYwMH0.6z3DYrwMK2u87zMqVrXKjGnjtkc9q4jWleQZVGQrYjk',

    // Optional hook to link API calls to users

});

// 3. Enable the Moesif middleware to start logging incoming API Calls

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(moesifMiddleware);
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});