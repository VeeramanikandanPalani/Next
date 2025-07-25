"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [message, setMessage] = useState("");

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const router = useRouter();
  const HandleRegisterClick = () => {
    router.push("/Register");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      setMessage(data.message || "Something went wrong");
    }
    toast.success(data.msg);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-3 shadow">
          <div className="card rounded p-2 bg-dark">
            <div className="card-title d-flex justify-content-center align-items-center">
              <Image src={Logo} alt="Logo" width={200} height={50} priority />
            </div>
            <div className="card-body">
              <h5 className="text-white text-center text-sm fw-bold">SignIn</h5>
              <form name="LoginForm" id="LoginForm">
                <div className="form-group ">
                  <label className="text-light small">Username</label>
                  <input
                    type="text"
                    name="Username"
                    id="Username"
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text-light small">Password</label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group mt-3 text-center">
                  <button
                    type="reset"
                    className="btn btn-sm btn-warning me-2"
                    onClick={HandleRegisterClick}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    name="btn-login"
                    id="btn-login"
                    className="btn btn-sm btn-success"
                    onClick={handleLoginSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
