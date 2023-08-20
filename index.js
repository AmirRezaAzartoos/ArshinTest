import express from "express";
const app = express()
import bodyParser from 'body-parser';
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import itemRouter from "./routes/item.routes.js";

app.use(cors());
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use('/items', itemRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, (_) => {
  console.log(`Server is running on port ${PORT}`);
});
