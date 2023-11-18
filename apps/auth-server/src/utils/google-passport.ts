import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { db, sql } from "database";
import { users } from "database/schema";
import * as dotenv from "dotenv";
dotenv.config();

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
      const email = profile._json.email;
      if (typeof email == "string") {
        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, email),
        });
        if (!user) {
          await db.insert(users).values({
            email,
            name: profile._json.name,
            picture: profile._json.picture,
          });
        }
      }
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
  const usr = user as any;
  callback(null, usr);
});

export default passport;
