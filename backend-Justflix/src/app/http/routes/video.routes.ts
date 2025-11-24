import { Router } from "express";
import { VideoDatabase } from "../../infrastructure/dataSources/inMemory/InMemoryVideoDataSource";

const router = Router();
const db = new VideoDatabase();

// GET /api/videolist
router.get("/", (req, res) => {
    const videos = db.getAllVideos();
    res.json({ videos });  // <--- AQUÍ DEVUELVE "videos": [...]
});

// GET /api/videolist/id/:id
router.get("/id/:id", (req, res) => {
    const video = db.getVideoById(req.params.id);

    if (!video) {
        return res.status(404).json({ error: "Video not found" });
    }

    res.json(video);    // <-- Devuelve objeto suelto
});

router.get("/topic/:topic", (req, res) => {
    const topic = req.params.topic;
    const videos = db.getAllVideos();

    const filtered = videos.filter(
        (video: any) => video.topic.toLowerCase() === topic.toLowerCase()
    );

    if (filtered.length === 0) {
        return res.status(404).json({
            error: "No videos found for topic: " + topic,
        });
    }

    res.json({ videos: filtered });
});

export default router;
