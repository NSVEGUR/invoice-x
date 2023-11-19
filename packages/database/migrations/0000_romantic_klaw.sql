DO $$ BEGIN
 CREATE TYPE "invoice_status" AS ENUM('paid', 'unpaid');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real,
	"status" "invoice_status" DEFAULT 'unpaid' NOT NULL,
	"due_date" date NOT NULL,
	"paid_at" date,
	"recipient" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"picture" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
