import { createApp } from "./app";

const port = process.env.PORT || 3001;
const server = createApp();

server.listen(port, () => {
  console.log(`started api on [::]:${port}, url: http://localhost:${port}`);
});
