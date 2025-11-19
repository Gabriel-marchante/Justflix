import { buildServer } from "./app/http/server";

const app = buildServer();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
