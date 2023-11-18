import { protect } from "@server/controllers/auth";
import {
  createInvoice,
  getInvoices,
  deleteInvoice,
  updateInvoice,
  payInvoice,
} from "@server/controllers/invoice";
import { Router } from "express";

const router = Router();

router.use(protect);

router.get("/", getInvoices);
router.post("/", createInvoice);
router.delete("/:id", deleteInvoice);
router.patch("/:id", updateInvoice);
router.post("/pay/:id", payInvoice);

export default router;
