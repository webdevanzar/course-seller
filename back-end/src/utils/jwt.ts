import Jwt from "jsonwebtoken";
type TokenPayload = {
  _id: string;
  name: string;
};

export const generateAccessToken = (user: TokenPayload) => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  return Jwt.sign({ _id: user._id, username: user.name }, secret, {
    expiresIn: "1d",
  });
};
