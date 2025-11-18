import { Video } from "../../../domain/entities/Video";
import { VideoRepository } from "../../../domain/repositories/VideoRepository";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class InMemoryVideoDataSource implements VideoRepository {
    private videos: Video[] = [];

    constructor() {
        this.loadData();
    }

    private async loadData() {
        try {
            const filePath = path.join(__dirname, "video.db.json");
            const data = await fs.readFile(filePath, "utf-8");
            this.videos = JSON.parse(data);
        } catch (err) {
            console.error("Error loading video database:", err);
            this.videos = [];
        }
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
