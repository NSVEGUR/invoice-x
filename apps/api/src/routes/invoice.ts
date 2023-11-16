import { getInvoices, createInvoice } from "@api/controllers/invoice";
import { Router } from "express";

const router = Router();

router.get("/", getInvoices);
router.post("/", createInvoice);
export default router;
