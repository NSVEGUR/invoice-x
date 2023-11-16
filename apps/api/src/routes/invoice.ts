import { getInvoices, createInvoice } from "@api/controllers/invoice";
import { protect } from "@api/controllers/user";
import { Router } from "express";

const router = Router();
router.use(protect);

router.get("/", getInvoices);
router.post("/", createInvoice);
export default router;
