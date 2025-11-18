import { Request, Response } from "express";
import { GetAllVideos } from "../../domain/usecases/videos/GetAllVideos";
import { GetVideoById } from "../../domain/usecases/videos/GetVideoById";
import { GetVideosByTopic } from "../../domain/usecases/videos/GetVideosByTopic";

export class VideoController {
    constructor(
        private getAllVideosUseCase: GetAllVideos,
        private getVideoByIdUseCase: GetVideoById,
        private getVideosByTopicUseCase: GetVideosByTopic
    ) {}

    getAllVideos = async (req: Request, res: Response) => {
        const videos = await this.getAllVideosUseCase.execute();
        res.json(videos);
    };

    getByTopic = async (req: Request, res: Response) => {
        const topic = req.params.topic;
        const videos = await this.getVideosByTopicUseCase.execute(topic);
        res.json(videos);
    };

    getById = async (req: Request, res: Response) => {
        const id = req.params.id;
        const video = await this.getVideoByIdUseCase.execute(id);
        if (!video) return res.status(404).json({ error: "Video not found" });
        res.json(video);
    };
}