import express, { Request, Response, NextFunction } from "express";
import videoRoutes from "./routes/video.routes";
import path from "path";
import { fileURLToPath } from "url";

// Adaptación para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function buildServer() {
  const app = express();

  app.use(express.json());

  app.use("/api/videolist", videoRoutes);

  app.use("/thumbnails", express.static(path.join(__dirname, "../infrastructure/assets/thumbnails")));

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
