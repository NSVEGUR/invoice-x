import * as dotenv from "dotenv";
import { createApp } from "./app";
dotenv.config();

const server = createApp();

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(
    `🚀 started auth-server on [::]:${PORT}, url: http://localhost:${PORT}`
  );
});

export { server };
