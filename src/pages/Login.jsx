import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext"; // Import the useLogin hook
import IconMail from "../components/Icon/IconMail";
import IconLockDots from "../components/Icon/IconLockDots";
import ThemeToggler from "../components/ThemeToggler";
import LanguageDropdown from "../components/LanguageDropdown";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import animationData from "../assets/login-animation.json";
import Logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login, loginError, isLoading } = useLogin(); // Destructure login, loginError, isLoading from context

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login(email, password, isRemember); // Use login function from context
    if (result.success) {
      navigate(`/${result.defaultHome.toLowerCase()}`);
    }
  };

  return (
    <div className=" h-screen flex items-center overflow-hidden dark:bg-black justify-between px-24">
      <div>
        <div className="flex gap-2 h-12 items-center">
          <img src={Logo} alt="logo" className="h-full" />
          <div className="text-primary">
            <h1 className="text-xl font-extrabold leading-none ">C-Store</h1>
            <p>Smart Backoffice</p>
          </div>
        </div>
        <div className="w-full my-16 lg:w-[600px]">
          <div className="mb-10 flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-3xl">
                {t("login")}
              </h1>
              <p className="text-white-dark">{t("welcome")}</p>
            </div>
            <div className="flex justify-end gap-3 mb-5">
              <ThemeToggler />
              <LanguageDropdown />
            </div>
          </div>
          <form className="space-y-5 dark:text-white" onSubmit={handleLogin}>
            <div>
              <div className="relative text-white-dark">
                <input
                  id="Email"
                  type="text"
                  placeholder={t("email")}
                  className="form-input shadow form-input-lg ps-10 placeholder:text-white-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconMail fill={true} />
                </span>
              </div>
            </div>
            <div>
              <div className="relative text-white-dark">
                <input
                  id="Password"
                  type="password"
                  placeholder={t("password")}
                  className="form-input shadow form-input-lg ps-10 placeholder:text-white-dark"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconLockDots fill={true} />
                </span>
              </div>
            </div>
            <div>
              <label className="flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="form-checkbox bg-white dark:bg-black me-3"
                  checked={isRemember}
                  onChange={(e) => setIsRemember(e.target.checked)}
                />
                <span className="text-white-dark">{t("rememberMe")}</span>
              </label>
            </div>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <button
              type="submit"
              className="btn btn-lg btn-primary !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : t("login")}
            </button>
          </form>
        </div>
        <div className="flex justify-between text-white-dark">
          <Link to="/" className="underline">
            Privacy Policy
          </Link>
          <Link to="/" className="underline">
            Copyright © 2024
          </Link>
        </div>
      </div>

      <Lottie
        animationData={animationData}
        className="lg:w-[450px] w-0 drop-shadow-2xl"
      />
    </div>
  );
}

export default Login;
