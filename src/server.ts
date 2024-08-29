import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { HOST, PORT } from './config/environments';

export default class Server {

  private app: Application;
  private port: number;
  private host: string;

  constructor() {

    this.app = express();
    this.port = parseInt(PORT);
    this.host = HOST;

    this.ConnectDb();
    this.Middleware();
    this.Routes();


  }

  private ConnectDb() {
    console.log('Connected to Mysql');
  }

  private Middleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  private Routes() {
    // Define your routes here
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }

  Listen() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server running at http://${this.host}:${this.port}`);
    });
  }


}