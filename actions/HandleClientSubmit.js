"use server";
import { getConnection } from "../lib/db";
import sql from "mssql";

export default async function HandleClientSubmit(prevState, formData) {
  console.log(formData);
  const client = formData.get("ClientName");
  const cost_center = formData.get("CostCenter");

  const errors = {};

  if (!client) {
    errors.client = "Client is required.";
  }
  if (!cost_center) {
    errors.cost_center = "CostCenter is required.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "Failed",
      errors,
    };
  }
  try {
    const pool = await getConnection();

    const createdBy = 1;
    const createdOn = new Date();

    await pool
      .request()
      .input("ClientName", sql.NVarChar, client)
      .input("CostCenter", sql.NVarChar, cost_center)
      .input("CreatedBy", sql.Int, createdBy) // INT type
      .input("CreatedOn", sql.DateTime, createdOn) // DATETIME type
      .query(`
        INSERT INTO Clients
          (ClientName, CostCenter,CreatedBy, CreatedOn)
        VALUES
          (@ClientName, @CostCenter, @CreatedBy, @CreatedOn)
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
