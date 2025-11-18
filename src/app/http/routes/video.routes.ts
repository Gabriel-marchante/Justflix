import { Router } from "express";
import { InMemoryVideoDataSource } from "../../infrastructure/dataSources/inMemory/InMemoryVideoDataSource";
import { GetAllVideos } from "../../domain/usecases/videos/GetAllVideos";
import { GetVideoById } from "../../domain/usecases/videos/GetVideoById";
import { GetVideosByTopic } from "../../domain/usecases/videos/GetVideosByTopic";
import { VideoController } from "../controllers/VideoController";

const router = Router();

const repo = new InMemoryVideoDataSource();
const controller = new VideoController(
    new GetAllVideos(repo),
    new GetVideoById(repo),
    new GetVideosByTopic(repo)
);

router.get("/", controller.getAllVideos);
router.get("/topic/:topic", controller.getByTopic);
router.get("/id/:id", controller.getById);

export default router;
