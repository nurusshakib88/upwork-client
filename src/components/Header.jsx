import React, { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LanguageDropdown from "./LanguageDropdown";
import { Link } from "react-router-dom";
import IconCalendar from "../components/Icon/IconCalendar";
import IconChatNotification from "../components/Icon/IconChatNotification";
import IconEdit from "../components/Icon/IconEdit";
import IconSearch from "../components/Icon/IconSearch";
import IconXCircle from "../components/Icon/IconXCircle";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="dark:text-white navbar sticky z-40 top-0 shadow dark:bg-black  flex items-center justify-between py-3 px-6 bg-white">
      <div className="mr-2 rtl:ml-2 hidden sm:block">
        <ul className="flex items-center space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
          <li>
            <Link
              to="/apps/calendar"
              className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
            >
              <IconCalendar />
            </Link>
          </li>
          <li>
            <Link
              to="/apps/todolist"
              className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
            >
              <IconEdit />
            </Link>
          </li>
          <li>
            <Link
              to="/apps/chat"
              className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
            >
              <IconChatNotification />
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:flex-1 sm:ml-0 ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
        <div className="sm:mr-auto sm:rtl:ml-auto">
          <form
            className={`${
              search && "!block"
            } sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
            onSubmit={() => setSearch(false)}
          >
            <div className="relative">
              <input
                type="text"
                className="form-input pl-9 rtl:pr-9 sm:pr-4 rtl:sm:pl-4 pr-9 rtl:pl-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
                placeholder="Search..."
              />
              <button
                type="button"
                className="absolute w-9 h-9 inset-0 right-auto rtl:left-auto appearance-none peer-focus:text-primary"
              >
                <IconSearch className="mx-auto" />
              </button>
              <button
                type="button"
                className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 right-2 rtl:left-2"
                onClick={() => setSearch(false)}
              >
                <IconXCircle />
              </button>
            </div>
          </form>
          <button
            type="button"
            onClick={() => setSearch(!search)}
            className="search_btn sm:hidden p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
          >
            <IconSearch className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]" />
          </button>
        </div>
      </div>
      <div className="flex space-x-2">
        <ThemeToggler />
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Header;
