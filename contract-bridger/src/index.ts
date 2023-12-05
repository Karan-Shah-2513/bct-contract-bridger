import express, { Response } from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_, res: Response) => {
  res.status(200).json({ message: "success" });
});
app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running in port ${process.env.PORT || 8080}`);
});
