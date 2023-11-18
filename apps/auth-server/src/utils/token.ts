import jwt from "jsonwebtoken";

export function signToken(payload: { id: number; email: string }) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SESSION_SECRET ?? "",
      {
        expiresIn: 60 * 60,
      },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
}
