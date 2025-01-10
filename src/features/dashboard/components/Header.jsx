import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import useUserStore from "../../../stores/useUserStore";
import LogoutButton from '../../../components/LogoutButton'
import ThemeController from "../../../components/ThemeController";
import useThemeStore from "../../../stores/useThemeStore";
const Header = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

    const { theme } = useThemeStore();


  return (
    <header className=" my-3 shadow-lg">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <Link to={"/"} className="text-2xl text-accent">
              {theme === "light" ? (
                <img src="/LogoBlack.png" alt="Logo" className=" h-12" />
              ) : (
                <img src="/LogoWhite.png" alt="Logo" className=" h-12" />
              )}{" "}
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal flex items-center">
              <li>
                <ThemeController />
              </li>
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
                      <h1 className="text-lg font-bold dark:text-neutral-content">
                        {name}
                      </h1>
                      <p className=" text-sm dark:text-neutral-400">{email}</p>
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-neutral rounded-box z-[1] w-64 shadow"
                  >
                    <li>
                      <Link to={"user-profile"}>
                        <a className="flex items-center gap-x-2">
                          <BiUserCircle size={20} />
                          User Profile
                        </a>
                      </Link>
                    </li>

                    <li>
                      <LogoutButton />
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
