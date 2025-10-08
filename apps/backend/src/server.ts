import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

export const startServer = () => {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(helmet());
  app.use(express.json());

  app.use("/api", routes);

  app.use((_, res) => res.status(404).json({ error: "Route not found" }));

  app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
};
