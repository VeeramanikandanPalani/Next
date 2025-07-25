"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Styles from "@/components/Header.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaAdn } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <nav className={`${Styles.main_navbar}`}>
        <div className="col-3">
          <Link className="navbar-brand" href="#">
            <Image
              src={Logo}
              width={200}
              height={40}
              alt="Logo"
              className={Styles.logo}
              priority
            />
          </Link>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-around align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: 15,
                  color: "white",
                  border: "0.2px solid lightblue",
                  backgroundColor: "transparent",
                }}
              >
                Masters
              </button>
              <ul
                className={`dropdown-menu ${Styles.dropdown_ul}`}
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link
                    href="/masters/client"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/masters/subclient"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    Sub Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/masters/issuecategories"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    Issue Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/masters/issuetypes"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    Issue Types
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: 15,
                  color: "white",
                  border: "0.2px solid lightblue",
                  backgroundColor: "transparent",
                }}
              >
                Request
              </button>
              <ul
                className={`dropdown-menu ${Styles.dropdown_ul}`}
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link
                    href="/request/makeNewRequest"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    New Request
                  </Link>
                </li>
                <li>
                  <Link
                    href="/masters/client"
                    className={`dropdown-item ${Styles.sub_dropdown}`}
                  >
                    Track Request
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className={`${Styles.navLink} fw-bold small rounded`}
              href="#"
            >
              Resourses
              <FaAngleDown />
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-end align-items-center">
            <input
              className="w-75 form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-sm m-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-2 ">
          <div
            className="d-flex justify-content-end align-items-center"
            style={{ marginRight: 5, background: "rgb(7 26 8)" }}
          >
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: 20,
                  color: "white",
                  border: "0.5px solid lightblue",
                  backgroundColor: "transparent",
                }}
              >
                <FaAdn />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
