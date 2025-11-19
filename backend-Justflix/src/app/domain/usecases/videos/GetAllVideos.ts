import { VideoRepository } from "../../repositories/VideoRepository";
import { Video } from "../../entities/Video";

export class GetAllVideos {
    constructor(private repo: VideoRepository) {}
    execute(): Promise<Video[]> {
        return this.repo.getAll();
    }
}
