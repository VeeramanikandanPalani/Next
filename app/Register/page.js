"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Logo from "@/public/logo.svg";
import { useRouter } from "next/navigation";

import { useActionState } from "react";
import HandleRegisterSubmit from "@/actions/HandleRegisterSubmit";

const initialState = { message: "", errors: {} };

export default function Home() {
  const [state, formAction] = useActionState(
    HandleRegisterSubmit,
    initialState
  );

  const router = useRouter();
  const HandleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-4 shadow">
          <div className="card rounded p-2 bg-dark ">
            <div className="card-title d-flex justify-content-center align-items-center">
              <Image src={Logo} alt="Logo" width={200} height={100} priority />
            </div>
            <div className="card-body">
              <form name="RegisterForm" id="RegisterForm" action={formAction}>
                <div className="form-group ">
                  <label className="text-light small">Username</label>
                  <input
                    type="text"
                    name="Username"
                    id="Username"
                    className="form-control"
                  />
                  {state.errors?.name && (
                    <p style={{ color: "red" }}>{state.errors.name}</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="text-light small">Email Id</label>
                  <input
                    type="text"
                    name="EmailId"
                    id="EmailId"
                    className="form-control"
                  />
                  {state.errors?.email && (
                    <p style={{ color: "red" }}>{state.errors.email}</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="text-light small">Mobile No</label>
                  <input
                    type="text"
                    name="Mobile"
                    id="Mobile"
                    className="form-control"
                  />
                  {state.errors?.phone && (
                    <p style={{ color: "red" }}>{state.errors.phone}</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="text-light small">Location</label>
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    className="form-control"
                  />
                  {state.errors?.location && (
                    <p style={{ color: "red" }}>{state.errors.location}</p>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label className="text-light small">Password</label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    className="form-control"
                  />
                  {state.errors?.password && (
                    <p style={{ color: "red" }}>{state.errors.password}</p>
                  )}
                </div>
                <div className="form-group mt-3 text-center">
                  <button
                    type="submit"
                    name="btn-login"
                    id="btn-login"
                    className="btn btn-sm btn-warning me-2"
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    name="btn-back"
                    id="btn-back"
                    className="btn btn-sm btn-success"
                    onClick={HandleBackClick}
                  >
                    Back
                  </button>
                  {state.message && (
                    <p style={{ color: "red" }}>{state.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
