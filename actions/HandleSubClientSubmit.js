"use server";
import { getConnection } from "../lib/db";
import sql from "mssql";

export default async function HandleSubClientSubmit(prevState, formData) {
  console.log(formData);
  const client_name = formData.get("ClientName");
  const sub_client_name = formData.get("SubClientName");
  const production_target = formData.get("ProductionTarget");
  const quality_target = formData.get("QualityTarget");

  const errors = {};

  if (!client_name) {
    errors.client = "Client is required.";
  }

  if (!sub_client_name) {
    errors.sub_client = "Sub client is required.";
  }
  if (!production_target) {
    errors.production_target = "Production target is required.";
  }
  if (!quality_target) {
    errors.quality_target = "Quality Target is required.";
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
      .input("ClientId", sql.Int, client_name)
      .input("SubClientName", sql.NVarChar, sub_client_name)
      .input("ProductionTarget", sql.Int, production_target)
      .input("QualityTarget", sql.Int, quality_target)
      .input("CreatedBy", sql.Int, createdBy)
      .input("CreatedOn", sql.DateTime, createdOn).query(`
        INSERT INTO SubClients 
          (ClientId, SubClientName, ProductionTarget, QualityTarget, CreatedBy, CreatedOn)
        VALUES 
          (@ClientId, @SubClientName, @ProductionTarget, @QualityTarget, @CreatedBy, @CreatedOn)
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
