import { config } from "../lib/config.js";
// import { jwt } from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["api"];
  if (!token) {
    return res.status(404).json({ auth: false, message: "no token provider" });
  } else {
    const decoded = jwt.verify(token, config.PrivateKey);
    req.userId = decoded.id;
  }
  next();
};

//   if (token === config.PrivateKey) {
//     next();
//   } else {
//     console.log("unauthorized");
//   }
