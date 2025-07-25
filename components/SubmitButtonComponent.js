"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButtonComponent() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <>
      <div className="form-group my-3 text-end">
        <button
          type="submit"
          name="btnReset"
          id="btnReset"
          className="btn btn-sm btn-warning me-2"
        >
          Reset
        </button>
        <button
          disabled={pending}
          type="submit"
          name="btnSubmit"
          id="btnSubmit"
          className="btn btn-sm btn-success"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </>
  );
}
