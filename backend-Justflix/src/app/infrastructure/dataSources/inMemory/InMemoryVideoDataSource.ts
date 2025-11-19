import { Video } from "../../../domain/entities/Video";
import { VideoRepository } from "../../../domain/repositories/VideoRepository";
import fs from "fs";
import path from "path";

export class InMemoryVideoDataSource implements VideoRepository {
    private videos: Video[];

    constructor() {
        // Leer el JSON
        const filePath = path.resolve("src/app/infrastructure/dataSources/inMemory/video.db.json");
        const rawData = fs.readFileSync(filePath, "utf-8");
        this.videos = JSON.parse(rawData);
    }

    async getAll(): Promise<Video[]> {
        return this.videos;
    }

    async getById(id: string): Promise<Video | null> {
        return this.videos.find(v => v.id === id) || null;
    }

    async getByTopic(topic: string): Promise<Video[]> {
        return this.videos.filter(v => v.topic === topic);
    }
}
