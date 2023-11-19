import { Queue, Worker, QueueEvents } from "bullmq";
import { Redis } from "ioredis";
import { db, gte } from "database";
import { invoices } from "database/schema";
import { getDateFromString } from "@server/utils/date";

const redis = new Redis({
  maxRetriesPerRequest: null,
});

export const queue = new Queue("mailer", {
  connection: redis,
});

queue.add("schedule", {}, { repeat: { pattern: "0 0 * * *" } }); // everyday at midnights

export const worker = new Worker(
  "mailer",
  async (job) => {
    if (job.name == "creation") {
      const response = await fetch(
        process.env.ZAPIER_INVOICE_CREATION_URL ?? "",
        {
          method: "POST",
          body: JSON.stringify(job.data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return response;
    }
    if (job.name == "reminder") {
      const response = await fetch(
        process.env.ZAPIER_INVOICE_REMINDER_URL ?? "",
        {
          method: "POST",
          body: JSON.stringify(job.data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return response;
    }
    if (job.name == "schedule") {
      console.log("I am running");
      const results = await db
        .select()
        .from(invoices)
        .where(gte(invoices.dueDate, new Date().toUTCString()));
      console.log("my results: ", results);
      for (const result of results) {
        const details = {
          amount: result.amount,
          recipient: result.recipient,
          dueDate: getDateFromString(`${result.dueDate}`),
          created: result.created,
        };
        const response = await fetch(
          process.env.ZAPIER_INVOICE_SCHEDULE_URL ?? "",
          {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        return response;
      }
    }
  },
  {
    connection: redis,
  }
);

const events = new QueueEvents("mailer", {
  connection: redis,
});

events.on("added", ({ name }) => {
  console.log(
    `🪝⏳ Zappier webhook trigger for job ${name} has been added to broker`
  );
});

events.on("completed", () => {
  console.log("🪝✅ Zappier webhook has been completed");
});

events.on("failed", ({ failedReason }) => {
  console.log("🪝💥 Zappier webhook has been failed: ", failedReason);
});
