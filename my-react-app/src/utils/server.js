//Include the express library
import express from 'express';
//Include the morgan middleware
import morgan from 'morgan';
//Include the cors middleware
import cors from 'cors';

import carRouter from '../routers/cars.js';



//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan('dev'));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

app.use('/api', carRouter);


  
export { app };
