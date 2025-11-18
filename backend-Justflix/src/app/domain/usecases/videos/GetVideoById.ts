import { VideoRepository } from "../../repositories/VideoRepository";
import { Video } from "../../entities/Video";

export class GetVideoById {
    constructor(private repo: VideoRepository) {}

    execute(id: string): Promise<Video | null> {
        return this.repo.getById(id);
    }
}
