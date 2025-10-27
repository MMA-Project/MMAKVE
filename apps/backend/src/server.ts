import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./swagger.js";
import cors from 'cors';

dotenv.config();

export const startServer = () => {
    const app = express();
    const PORT = process.env.PORT || 4000;

    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }))

    app.use(helmet());
    app.use(express.json());

    app.use("/api", routes);

    // Swagger UI
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

    app.use((_, res) => res.status(404).json({ error: "Route not found" }));

    app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
};
