"use client";
import SubmitButtonComponent from "@/components/SubmitButtonComponent";
import { useActionState } from "react";
import HandleNewRequestSubmit from "@/actions/HandleNewRequestSubmit";

const InitialState = {
  message: "",
};

export default function MakeNewRequest() {
  const [state, formAction] = useActionState(
    HandleNewRequestSubmit,
    InitialState
  );
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="col-10 shadow ">
            <div className="card rounded p-2 bg-dark ">
              <div className="card-header text-sm text-light fw-bold border-bottom">
                Create Request
              </div>
              <div className="card-body">
                <form
                  name="RequestAdditionForm"
                  id="RequestAdditionForm"
                  action={formAction}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="form-group text-sm text-light">
                      Employee Details
                    </p>
                  </div>

                  <div className="d-flex justify-content-around align-items-center">
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">Employee Id</label>
                      <input
                        type="text"
                        name="EmployeeId"
                        id="EmployeeId"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.employee_id && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.employee_id}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Employee Name</label>
                      <input
                        type="text"
                        name="EmployeeName"
                        id="EmployeeName"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.employee_name && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.employee_name}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Designation</label>
                      <input
                        type="text"
                        name="Designation"
                        id="Designation"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.designation && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.designation}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">Location</label>
                      <input
                        type="text"
                        name="Location"
                        id="Location"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.location && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-around align-items-center">
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Email Id</label>
                      <input
                        type="text"
                        name="EmailId"
                        id="EmailId"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.email_id && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.email_id}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Vertical</label>
                      <input
                        type="text"
                        name="Vertical"
                        id="Vertical"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.vertical && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.vertical}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Coder Or QA</label>
                      <input
                        type="text"
                        name="Corder_Or_Qa"
                        id="Corder_Or_Qa"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.coder_or_qa && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.coder_or_qa}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2  px-2">
                      <label className="text-white">Cost Center</label>
                      <input
                        type="text"
                        name="CostCenter"
                        id="CostCenter"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.cost_center && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.cost_center}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 d-flex justify-content-center align-items-center">
                    <p className="form-group text-sm text-light">
                      Downtime Details
                    </p>
                  </div>

                  <div className="d-flex justify-content-around align-items-center">
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">Client Name</label>
                      <input
                        type="text"
                        name="ClientName"
                        id="ClientName"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.client && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.client}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">Sub Client</label>
                      <input
                        type="text"
                        name="SubClient"
                        id="SubClient"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.sub_client && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.sub_client}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">From</label>
                      <input
                        type="date"
                        name="From"
                        id="From"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.from && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.from}
                        </p>
                      )}
                    </div>
                    <div className="col-3 form-group my-2 px-2">
                      <label className="text-white">Starting At</label>
                      <input
                        type="time"
                        name="StartingAt"
                        id="StartingAt"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.starting_at && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.starting_at}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-around align-items-center">
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">To</label>
                      <input
                        type="date"
                        name="To"
                        id="To"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.to && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.to}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Ended At</label>
                      <input
                        type="time"
                        name="EndedAt"
                        id="EndedAt"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.ended_at && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.ended_at}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Total Downtime</label>
                      <input
                        type="text"
                        name="TotalDowntime"
                        id="TotalDowntime"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.total_downtime && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.total_downtime}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Perday Limit</label>
                      <input
                        type="text"
                        name="PerdayLimit"
                        id="PerdayLimit"
                        className="form-control form-control-sm"
                        defaultValue="8"
                      />
                      {state.errors?.perday_limit && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.perday_limit}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-around align-items-center">
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Downtime Type</label>
                      <input
                        type="text"
                        name="DowntimeType"
                        id="DowntimeType"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.downtime_type && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.downtime_type}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Issue Category</label>
                      <input
                        type="text"
                        name="IssueCategory"
                        id="IssueCategory"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.issue_category_name && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.issue_category_name}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Issue Type</label>
                      <input
                        type="text"
                        name="IssueType"
                        id="IssueType"
                        className="form-control form-control-sm"
                      />
                      {state.errors?.issue_type && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.issue_type}
                        </p>
                      )}
                    </div>
                    <div className="px-2 col-3 form-group my-2">
                      <label className="text-white">Oasis Id</label>
                      <input
                        type="text"
                        name="OasisId"
                        id="OasisId"
                        className="form-control form-control-sm"
                        defaultValue="8"
                      />
                      {state.errors?.oasis_id && (
                        <p className="my-1 text-danger text-sm">
                          {state.errors.oasis_id}
                        </p>
                      )}
                    </div>
                  </div>

                  <SubmitButtonComponent />
                  {state.message && (
                    <p className="my-1 text-danger text-sm">{state.message}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
