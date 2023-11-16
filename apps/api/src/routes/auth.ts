import { getUser } from "@api/controllers/user";
import { ExtendedUser } from "@api/types";
import { Router } from "express";
import passport from "passport";

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
    failureRedirect: "/auth/failed",
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL ?? "");
  }
);

router.get("/success", (req, res) => {
  if (!req.user) {
    return res.status(403).json({
      success: false,
      message: "Not authorized",
    });
  }
  const user = req.user as ExtendedUser;
  const data = user._json;
  return res.status(200).json({
    success: true,
    message: "User has successfully authenticated",
    user: {
      name: data.name,
      email: data.email,
      picture: data.picture,
    },
  });
});

router.get("/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "User failed to authenticate.",
  });
});

router.get("/logout", (req, res) => {
  console.log("requested for logout");
  req.logout((err) => {
    console.log(err);
  });
  res.redirect(process.env.CLIENT_URL ?? "");
});

export default router;
