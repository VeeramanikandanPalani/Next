import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getConnection } from "@/lib/db";

const JWT_SECRET = process.env.NEXT_JWT_TOKEN;

export async function POST(request) {
  const { Username, Password } = await request.json();

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Username", Username)
    .query("SELECT * FROM Users WHERE Username = @Username");

  if (result.recordset.length === 0) {
    return NextResponse.json({ msg: "User not found" }, { status: 404 });
  }

  const user = result.recordset[0];

  const isMatch = await bcrypt.compare(Password, user.Password);

  if (!isMatch) {
    return NextResponse.json({ msg: "Invalid credentials" }, { status: 400 });
  }

  const token = jwt.sign({ id: user.UserId, email: user.EmailId }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return NextResponse.json({ token, msg: "User validated successfully...!" });
}
