import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.SESSION_SECRET ?? "",
      (err: any, token: any) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
}
