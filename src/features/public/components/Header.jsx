import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import ThemeController from "../../../components/ThemeController";
import useCookie from "react-use-cookie";
import useThemeStore from "../../../stores/useThemeStore";

const Header = () => {
  const [user] = useCookie("user");
  const { theme } = useThemeStore();

  return (
    <header className=" my-5 shadow-lg pb-2">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <Link to={"/"} className="text-2xl text-accent">
              {theme === "light" ? (
                <img src="/LogoBlack.png" alt="Logo" className=" h-12" />
              ) : (
                <img src="/LogoWhite.png" alt="Logo" className=" h-12" />
              )}
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal flex items-center gap-x-2">
              <li>
                <ThemeController />
              </li>
              <div>
                {!user ? (
                  <div className=" flex items-center gap-x-3">
                    <li>
                      <Link
                        to={"/login"}
                        className="btn bg-transparent border-none text-accent"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to={"/register"}
                        className=" btn btn-accent hover:shadow"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </div>
                ) : (
                  <>
                    <Link
                      to={"/dashboard"}
                      className=" btn btn-accent hover:shadow"
                    >
                      {` ${JSON.parse(user).name}'s Dashboard`}
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
