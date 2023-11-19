import { Router } from "express";
import passport from "passport";
import {
  failureRedirect,
  getAccessToken,
  refreshToken,
  logout,
  getUser,
  successRedirect,
} from "@server/controllers/auth";
import { signToken } from "@server/utils/token";
import { db, sql } from "database";
import { users } from "database/schema";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  async function (req, res) {
    const user = req.user as any;
    const email = user._json.email;
    const results = await db
      .select()
      .from(users)
      .where(sql`${users.email} = ${email}`);
    if (results.length > 0) {
      const user = results[0];
      const token = await signToken({ id: user.id, email: user.email });
      res.cookie("token", token, {
        httpOnly: true,
      });
    }
    res.redirect(process.env.CLIENT_URL ?? "");
  }
);
router.post("/refreshToken", refreshToken);
router.post("/accessToken", getAccessToken);
router.get("/success", successRedirect);
router.get("/failure", failureRedirect);
router.get("/logout", logout);
router.get("/user", getUser);

export default router;
