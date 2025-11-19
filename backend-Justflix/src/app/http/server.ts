import express, { Request, Response, NextFunction } from "express";
import videoRoutes from "./routes/video.routes";
import path from "path";

export function buildServer() {
    const app = express();

    app.use(express.json());

    // Servir vídeos
    app.use("/videos", express.static(path.resolve("src/app/infrastructure/assets/videos")));

    // Servir miniaturas
    app.use("/thumbnails", express.static(path.resolve("src/app/infrastructure/assets/thumbnails")));

    // Rutas de API
    app.use("/api/videolist", videoRoutes);

    app.use("*", (req: Request, res: Response) => {
        res.status(404).json({ message: "Resource not found" });
    });

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        res.status(err.status || 500).json({
            error: true,
            message: err.message || "Internal server error",
        });
    });

    return app;
}
