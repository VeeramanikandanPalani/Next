"use server";
import { getConnection } from "../lib/db";
import sql from "mssql";
import bcrypt from "bcrypt";
import toast from "react-hot-toast";

export default async function HandleIssueTypeSubmit(prevState, formData) {
  console.log(formData);
  const issue_category = formData.get("IssueCategory");
  const issue_type = formData.get("IssueType");

  const errors = {};

  if (!issue_category) {
    errors.issue_category = "Issue Category is required.";
  }
  if (!issue_type) {
    errors.issue_type = "IssueType is required.";
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
      .input("IssueCategoryId", sql.Int, issue_category)
      .input("IssueType", sql.NVarChar, issue_type)
      .input("CreatedBy", sql.Int, createdBy) // INT type
      .input("CreatedOn", sql.DateTime, createdOn) // DATETIME type
      .query(`
        INSERT INTO IssueTypes
          (IssueCategoryId, IssueType,CreatedBy, CreatedOn)
        VALUES
          (@IssueCategoryId, @IssueType, @CreatedBy, @CreatedOn)
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
