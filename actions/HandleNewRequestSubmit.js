"use server";
import { end } from "@popperjs/core";
import { getConnection } from "../lib/db";
import sql from "mssql";

export default async function HandleNewRequestSubmit(prevState, formData) {
  const emp_id = formData.get("EmployeeId");
  const emp_name = formData.get("EmployeeName");
  const designation = formData.get("Designation");
  const location = formData.get("Location");
  const email_id = formData.get("EmailId");
  const vertical = formData.get("Vertical");
  const coder_or_qa = formData.get("Corder_Or_Qa");
  const cost_center = formData.get("CostCenter");
  const client_name = formData.get("ClientName");
  const sub_client = formData.get("SubClient");
  const start_date = formData.get("From");
  const starting_at = formData.get("StartingAt");
  const to = formData.get("To");
  const ended_at = formData.get("EndedAt");
  const total_downtime = formData.get("TotalDowntime");
  const per_Day_limit = formData.get("PerdayLimit");
  const downtime_type = formData.get("DowntimeType");
  const issue_category = formData.get("IssueCategory");
  const issue_type = formData.get("IssueType");
  const oasis_id = formData.get("OasisId");

  const errors = {};

  if (!emp_id) {
    errors.emp_id = "Employee Id is required.";
  }
  if (!emp_name) {
    errors.emp_name = "Employee Name is required.";
  }
  if (!designation) {
    errors.designation = "Designation is required.";
  }
  if (!location) {
    errors.location = "Location is required.";
  }
  if (!email_id) {
    errors.email_id = "Email Id is required.";
  }
  if (!vertical) {
    errors.vertical = "Vertical is required.";
  }
  if (!coder_or_qa) {
    errors.coder_or_qa = "Coder Or QA is required.";
  }
  if (!cost_center) {
    errors.cost_center = "Cost Center is required.";
  }
  if (!client_name) {
    errors.client_name = "Client Name is required.";
  }
  if (!sub_client) {
    errors.sub_client = "Sub Client is required.";
  }
  if (!start_date) {
    errors.start_date = "From date is required.";
  }
  if (!starting_at) {
    errors.starting_at = "Starting At is required.";
  }
  if (!to) {
    errors.to = "To is required.";
  }
  if (!ended_at) {
    errors.ended_at = "Ended At is required.";
  }
  if (!total_downtime) {
    errors.total_downtime = "Total Downtime is required.";
  }
  if (!per_Day_limit) {
    errors.per_Day_limit = "Per day limit is required.";
  }
  if (!downtime_type) {
    errors.downtime_type = "Downtime type is required.";
  }
  if (!issue_category) {
    errors.issue_category = "Issue category is required.";
  }
  if (!issue_type) {
    errors.issue_type = "Issue type is required.";
  }
  if (!issue_type) {
    errors.issue_type = "Issue type is required.";
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
      .input("EmployeeId", sql.Int, emp_id)
      .input("EmployeeName", sql.NVarChar, emp_name)
      .input("Designation", sql.Int, designation)
      .input("Location", sql.NVarChar, location)
      .input("EmailId", sql.NVarChar, email_id)
      .input("Vertical", sql.NVarChar, vertical)
      .input("CoderOrQa", sql.Int, coder_or_qa)
      .input("CostCenter", sql.NVarChar, cost_center)
      .input("ClientName", sql.Int, client_name)
      .input("SubClientName", sql.Int, sub_client)
      .input("StartDate", sql.Date, start_date)
      .input("StartingAt", sql.NVarChar, starting_at)
      .input("EndDate", sql.Date, to)
      .input("EndedAt", sql.NVarChar, ended_at)
      .input("TotalDowntime", sql.Int, total_downtime)
      .input("PerDayLimit", sql.Int, per_Day_limit)
      .input("DowntimeType", sql.Int, downtime_type)
      .input("IssueCategory", sql.Int, issue_category)
      .input("IssueType", sql.Int, issue_type)
      .input("OasisId", sql.Int, oasis_id)
      .input("CreatedBy", sql.Int, createdBy)
      .input("CreatedOn", sql.DateTime, createdOn).query(`
        INSERT INTO DowntimeRequest 
          (EmployeeId, EmployeeName, Designation, Location, EmailId, Vertical,CoderOrQa,CostCenter,ClientName,
          SubClientName,StartDate,StartingAt,EndDate,EndedAt,TotalDowntime,PerDayLimit,DowntimeType,
          IssueCategory,IssueType,OasisId,CreatedBy,CreatedOn)
        VALUES 
          (@EmployeeId, @EmployeeName, @Designation, @Location, @EmailId, @Vertical,@CoderOrQa,@CostCenter, @ClientName, 
          @SubClientName, @StartDate, @StartingAt,@EndDate,@EndedAt, @TotalDowntime, @PerDayLimit, @DowntimeType, 
          @IssueCategory,@IssueType,@OasisId, @CreatedBy, @CreatedOn)
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
