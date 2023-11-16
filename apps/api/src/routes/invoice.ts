import { getSpecificEmails } from "@api/controllers/invoice";
import { protect } from "@api/controllers/user";
import { Router } from "express";

const router = Router();
router.use(protect);

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Successfully fetched emails",
    emails: [],
  });
});

export default router;
