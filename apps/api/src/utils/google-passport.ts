import dotenv from "dotenv";
import { prisma } from "@api/db";
import AppError from "@api/utils/app-error";

dotenv.config({
  path: ".env",
});

import passport from "passport";
import { Strategy } from "passport-google-oauth20";

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
    },
    async function (req, accessToken, refreshToken, profile, callback) {
      const user = await prisma.user.findUnique({
        where: {
          email: profile._json.email,
        },
      });
      if (!user) {
        if (!profile._json.email) throw new AppError("Email not found", 404);
        await prisma.user.create({
          data: {
            email: profile._json.email,
            name: profile._json.name,
            picture: profile._json.picture,
          },
        });
      }
      callback(null, profile);
    }
  )
);
passport.serializeUser((user, callback) => {
  callback(null, user);
});
passport.deserializeUser((user, callback) => {
  callback(null, user as any);
});

export default passport;
