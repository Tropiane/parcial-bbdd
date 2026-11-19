import jwt from "jsonwebtoken";
import ENV from "../config/env";

import { user } from "../usuario/interface";

export function signToken(data: any): string {
    return jwt.sign(data, ENV.JWT_SECRET);
}

export function verifyToken(token: string) {
    return jwt.verify(token, ENV.JWT_SECRET);
}
