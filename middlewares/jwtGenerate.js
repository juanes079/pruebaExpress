import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
function generateToken(user) {
  try {
    const tokenSignature = process.env.SECRET_KEY || "";
    const saveToken = jwt.sign(user, tokenSignature, {
      expiresIn: "1h",
    });
    return saveToken;
  } catch (error) {
    return " error al crear el token ";
  }
}

export default generateToken;
