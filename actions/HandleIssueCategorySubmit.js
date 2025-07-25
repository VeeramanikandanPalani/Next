"use server";
import { getConnection } from "../lib/db";
import sql from "mssql";

export default async function HandleIssueCategorySubmit(prevState, formData) {
  const issue_category = formData.get("IssueCategory");

  const errors = {};

  if (!issue_category) {
    errors.issue_category = "Issue Category is required.";
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
      .input("IssueCategory", sql.NVarChar, issue_category)
      .input("CreatedBy", sql.Int, createdBy) // INT type
      .input("CreatedOn", sql.DateTime, createdOn) // DATETIME type
      .query(`
        INSERT INTO IssueCategories
          (IssueCategory,CreatedBy, CreatedOn)
        VALUES
          (@IssueCategory, @CreatedBy, @CreatedOn)
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
