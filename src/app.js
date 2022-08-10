import express from "express";
import index from "./routes/index.routes.js";

const app = express();
app.use(express.json()); //middlewares
app.use(index);

export default app;
