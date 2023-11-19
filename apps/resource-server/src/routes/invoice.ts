import { protect } from "@server/controllers/auth";
import {
  createInvoice,
  getInvoices,
  deleteInvoice,
  updateInvoice,
  payInvoice,
  remindInvoice,
} from "@server/controllers/invoice";
import { Router } from "express";

const router = Router();

router.use(protect);

router.get("/", getInvoices);
router.post("/", createInvoice);
router.delete("/:id", deleteInvoice);
router.patch("/:id", updateInvoice);
router.post("/:id/pay", payInvoice);
router.post("/:id/remind", remindInvoice);

export default router;
