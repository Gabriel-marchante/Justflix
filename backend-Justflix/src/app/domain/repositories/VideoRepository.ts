import { Video } from "../entities/Video";

export interface VideoRepository {
    getAll(): Promise<Video[]>;
    getById(id: string): Promise<Video | null>;
    getByTopic(topic: string): Promise<Video[]>;
}
