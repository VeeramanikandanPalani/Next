"use client";
import SubmitButtonComponent from "@/components/SubmitButtonComponent";
import { useActionState } from "react";
import HandleIssueCategorySubmit from "@/actions/HandleIssueCategorySubmit";

const InitialState = {
  message: "",
};

export default function IssueCategoryMaster() {
  const [state, formAction] = useActionState(
    HandleIssueCategorySubmit,
    InitialState
  );
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-4 shadow ">
            <div className="card rounded p-2 bg-dark ">
              <div className="card-header text-sm text-light fw-bold border-bottom">
                Add New
              </div>
              <div className="card-body">
                <form
                  name="IssueCategoryAdditionForm"
                  id="IssueCategoryAdditionForm"
                  action={formAction}
                >
                  <div className="form-group my-2">
                    <label className="text-white">Issue Category</label>
                    <input
                      type="text"
                      name="IssueCategory"
                      id="IssueCategory"
                      className="form-control"
                    />
                    {state.errors?.issue_category && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.issue_category}
                      </p>
                    )}
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
