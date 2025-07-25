"use client";
import SubmitButtonComponent from "@/components/SubmitButtonComponent";
import { useActionState } from "react";
import HandleClientSubmit from "@/actions/HandleClientSubmit";
const InitialState = {
  message: "",
};
export default function ClientMaster() {
  const [state, formAction] = useActionState(HandleClientSubmit, InitialState);
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
                  name="ClientAdditionForm"
                  id="ClientAdditionForm"
                  action={formAction}
                >
                  <div className="form-group my-2">
                    <label className="text-white">Client Name</label>
                    <input
                      type="text"
                      name="ClientName"
                      id="ClientName"
                      className="form-control"
                    />
                    {state.errors?.client && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.client}
                      </p>
                    )}
                  </div>
                  <div className="form-group my-2">
                    <label className="text-white">Cost Center</label>
                    <input
                      type="text"
                      name="CostCenter"
                      id="CostCenter"
                      className="form-control"
                    />
                    {state.errors?.cost_center && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.cost_center}
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
