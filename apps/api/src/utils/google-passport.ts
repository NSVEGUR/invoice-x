import dotenv from "dotenv";

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
      callbackURL: "/auth/google/zapier/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
      state: true,
    },
    async function (req, accessToken, refreshToken, profile, callback) {
      callback(null, {
        ...profile,
        accessToken,
        refreshToken,
      });
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
