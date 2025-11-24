import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class VideoDatabase {
    private getData() {
        const filePath = path.join(__dirname, "video.db.json");
        const raw = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(raw);
    }

    getAllVideos() {
        const data = this.getData();
        return data.videos;  // <- AHORA LEE "videos"
    }

    getVideoById(id: string) {
        const data = this.getData();
        return data.videos.find((v: any) => v.id === id);
    }
}
