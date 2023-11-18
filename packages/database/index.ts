import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as Schema from "./schema";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db: NodePgDatabase<typeof Schema> = drizzle(client, {
  schema: Schema,
});

export * from "drizzle-orm";
