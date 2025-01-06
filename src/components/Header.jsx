import React from "react";
import Container from "./Container";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import useUserStore from "../stores/useUserStore";

const Header = () => {
   const {
     user: { name, email, profile_image },
   } = useUserStore();

  return (
    <header className=" mb-5">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <Link to={"/"} className="text-2xl text-accent">
              <img src="/LogoWhite.png" alt="Logo" className=" h-12" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            profile_image
                              ? profile_image
                              : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-neutral-content">
                        {name}
                      </h1>
                      <p className=" text-sm text-neutral-400">{email}</p>
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-neutral rounded-box z-[1] mt-3 w-64 p-2 shadow"
                  >
                    <li>
                      <Link to={"user-profile"}>
                        <a className=" py-2 flex items-center gap-x-2">
                          <BiUserCircle size={18} />
                          Profile
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Logout />
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;