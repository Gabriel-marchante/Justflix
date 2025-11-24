import { Request, Response } from "express";
import { GetAllVideos } from "../../domain/usecases/videos/GetAllVideos";
import { GetVideoById } from "../../domain/usecases/videos/GetVideoById";
import { GetVideosByTopic } from "../../domain/usecases/videos/GetVideosByTopic";

export class VideoController {
    constructor(
        private getAll: GetAllVideos,
        private getByIdUC: GetVideoById,
        private getByTopicUC: GetVideosByTopic
    ) {}

    getAllVideos = async (req: Request, res: Response) => {
        const videos = await this.getAll.execute();
        res.json(videos);
    };

    getById = async (req: Request, res: Response) => {
        const id = req.params.id;
        const video = await this.getByIdUC.execute(id);
        if (!video) return res.status(404).json({ error: "Video not found" });
        res.json(video);
    };

    getByTopic = async (req: Request, res: Response) => {
        const topic = req.params.topic;
        const videos = await this.getByTopicUC.execute(topic);
        res.json(videos);
    };
}
