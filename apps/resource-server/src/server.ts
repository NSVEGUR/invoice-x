import * as dotenv from "dotenv";
import { createApp } from "./app";
import Redis from "ioredis";
dotenv.config();

const server = createApp();
const redis = new Redis();

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
  console.log(
    `🚀 started resource-server on [::]:${PORT}, url: http://localhost:${PORT}`
  );
});

redis.on("connect", () => {
  console.log(`🚀 connected to redis cache`);
});

export { server, redis };
