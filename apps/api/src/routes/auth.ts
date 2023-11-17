import { Router } from "express";
import passport from "passport";
import {
  failureRedirect,
  getAccessToken,
  getRefreshToken,
  logout,
  successRedirect,
} from "@api/controllers/auth";

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
  (req, res) => {
    res.redirect(process.env.CLIENT_URL ?? "");
  }
);
router.get(
  "/google/zapier/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    const query = req.url.slice(req.url.indexOf("?"));
    res.redirect(`${process.env.ZAPIER_CLIENT_URL}/${query}`);
  }
);
router.post("/refreshToken", getRefreshToken);
router.post("/accessToken", getAccessToken);
router.get("/success", successRedirect);
router.get("/failure", failureRedirect);
router.get("/logout", logout);

export default router;
