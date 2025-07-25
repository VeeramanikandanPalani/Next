"use server";
import { getConnection } from "../lib/db";
import sql from "mssql";
import bcrypt from "bcrypt";

export default async function HandleRegisterSubmit(prevState, formData) {
  console.log(formData);
  const name = formData.get("Username");
  const email = formData.get("EmailId");
  const phone = formData.get("Mobile");
  const location = formData.get("Location");
  const password = formData.get("Password");
  const hashedPassword = await bcrypt.hash(password, 10);

  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email.";
  }

  if (!phone) {
    errors.phone = "Mobile No is required.";
  }
  if (!location) {
    errors.location = "Location is required.";
  }
  if (!password) {
    errors.password = "Password is required.";
  }
  if (Object.keys(errors).length > 0) {
    return {
      message: "Failed",
      errors,
    };
  }
  try {
    const pool = await getConnection();

    const createdBy = 11;
    const createdOn = new Date();

    await pool
      .request()
      .input("Username", sql.NVarChar, name)
      .input("EmailId", sql.NVarChar, email)
      .input("MobileNo", sql.Int, phone)
      .input("Location", sql.NVarChar, location)
      .input("Password", sql.NVarChar, hashedPassword)
      .input("CreatedBy", sql.Int, createdBy) // INT type
      .input("CreatedOn", sql.DateTime, createdOn) // DATETIME type
      .query(`
        INSERT INTO Users 
          (Username, EmailId, MobileNo, Location,Password, CreatedBy, CreatedOn)
        VALUES 
          (@Username, @EmailId, @MobileNo, @Location,@Password, @CreatedBy, @CreatedOn)
      `);

    return { message: "Data saved!", errors: {} };
  } catch (error) {
    console.error("Insert Error:", error);
    return {
      message: "Failed to save data.",
      errors: {},
      dbError: error.message,
    };
  }
}
