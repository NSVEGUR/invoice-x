import { createApp } from "./app";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 3001;
const server = createApp();

server.listen(PORT, () => {
  console.log(`started api on [::]:${PORT}, url: http://localhost:${PORT}`);
});

export { server };
