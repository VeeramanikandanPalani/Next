"use client";
import SubmitButtonComponent from "@/components/SubmitButtonComponent";
import { useActionState } from "react";
import HandleSubClientSubmit from "@/actions/HandleSubClientSubmit";
const InitialState = {
  message: "",
};
export default function SubClientMaster() {
  const [state, formAction] = useActionState(
    HandleSubClientSubmit,
    InitialState
  );
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-5 shadow ">
            <div className="card rounded p-2 bg-dark ">
              <div className="card-header text-sm text-light fw-bold border-bottom">
                Add New
              </div>
              <div className="card-body">
                <form
                  name="SubClientAdditionForm"
                  id="SubClientAdditionForm"
                  action={formAction}
                >
                  <div className="form-group my-2">
                    <label className="text-white">Client Name</label>
                    <select
                      name="ClientName"
                      id="ClientName"
                      className="form-control"
                    >
                      <option value="1">Test Client</option>
                    </select>
                    {state.errors?.client && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.client}
                      </p>
                    )}
                  </div>
                  <div className="form-group my-2">
                    <label className="text-white">Sub Client Name</label>
                    <input
                      type="text"
                      name="SubClientName"
                      id="SubClientName"
                      className="form-control"
                    />
                    {state.errors?.sub_client_name && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.sub_client_name}
                      </p>
                    )}
                  </div>
                  <div className="form-group my-2">
                    <label className="text-white">Production Target</label>
                    <input
                      type="text"
                      name="ProductionTarget"
                      id="ProductionTarget"
                      className="form-control"
                    />
                    {state.errors?.production_target && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.production_target}
                      </p>
                    )}
                  </div>
                  <div className="form-group my-2">
                    <label className="text-white">Quality Target</label>
                    <input
                      type="text"
                      name="QualityTarget"
                      id="QualityTarget"
                      className="form-control"
                    />
                    {state.errors?.quality_target && (
                      <p className="my-1 text-danger text-sm">
                        {state.errors.quality_target}
                      </p>
                    )}
                  </div>
                  <div className="form-group my-3 text-end">
                    <SubmitButtonComponent />
                    {state.message && (
                      <p className="my-1 text-danger text-sm">
                        {state.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
