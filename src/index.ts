import app from './app';
import cors from 'cors';
import router from './routes';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import docRouter from './config/swagger';


const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({
    message: "Booking event API, welcome to the API",
    status: "success",
    data: {
      name: "Booking event API",
      version: "1.0.0",
      author: "yvanddniyo",
    },
  });
});
app.use('/api/docs', docRouter);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
