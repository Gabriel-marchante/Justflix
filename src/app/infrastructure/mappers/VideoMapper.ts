import { Video } from "../../domain/entities/Video";

export class VideoMapper {
    static toDomain(raw: any): Video {
        return {
            id: raw.id,
            topic: raw.topic,
            description: raw.description,
            duration: raw.duration,
            thumbnail: raw.thumbnail,
        };
    }
}
