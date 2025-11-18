import { VideoRepository } from "../../repositories/VideoRepository";
import { Video } from "../../entities/Video";

export class GetVideosByTopic {
    constructor(private repo: VideoRepository) {}

    execute(topic: string): Promise<Video[]> {
        return this.repo.getByTopic(topic);
    }
}
