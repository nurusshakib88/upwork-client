import React from "react";
import { Link } from "react-router-dom";
import IconArrowLeft from "../../components/Icon/IconArrowLeft";
import IconCashBanknotes from "../../components/Icon/IconCashBanknotes";
import IconUser from "../../components/Icon/IconUser";
import IconNetflix from "../../components/Icon/IconNetflix";
import IconBolt from "../../components/Icon/IconBolt";
import IconPlus from "../../components/Icon/IconPlus";
import IconCaretDown from "../../components/Icon/IconCaretDown";
import PerfectScrollbar from "react-perfect-scrollbar";

const RecentActivities = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
        <h5 className="font-semibold text-lg dark:text-white-light mb-5">
          Recent Activities
        </h5>
        <div className="relative h-[290px] pr-3 rtl:pl-3 -mr-3 rtl:-ml-3 mb-4 overflow-y-auto custom-scrollbar">
          <div className="text-sm cursor-pointer">
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-primary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Updated Server Logs</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                Just Now
              </div>

              <span className="badge badge-outline-primary absolute right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-success w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Send Mail to HR and Admin</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                2 min ago
              </div>

              <span className="badge badge-outline-success absolute right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-danger w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Backup Files EOD</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                14:00
              </div>

              <span className="badge badge-outline-danger absolute right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-black w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Collect documents from Sara</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                16:00
              </div>

              <span className="badge badge-outline-dark absolute right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-warning w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">
                Conference call with Marketing Manager.
              </div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                17:00
              </div>

              <span className="badge badge-outline-warning absolute right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100">
                In progress
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-info w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Rebooted Server</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                17:00
              </div>

              <span className="badge badge-outline-info absolute right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Send contract details to Freelancer</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                18:00
              </div>

              <span className="badge badge-outline-secondary absolute right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-primary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Updated Server Logs</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                Just Now
              </div>

              <span className="badge badge-outline-primary absolute right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-success w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Send Mail to HR and Admin</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                2 min ago
              </div>

              <span className="badge badge-outline-success absolute right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-danger w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Backup Files EOD</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                14:00
              </div>

              <span className="badge badge-outline-danger absolute right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-black w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Collect documents from Sara</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                16:00
              </div>

              <span className="badge badge-outline-dark absolute right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-warning w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">
                Conference call with Marketing Manager.
              </div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                17:00
              </div>

              <span className="badge badge-outline-warning absolute right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100">
                In progress
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-info w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Rebooted Server</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                17:00
              </div>

              <span className="badge badge-outline-info absolute right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100">
                Completed
              </span>
            </div>
            <div className="flex items-center py-1.5 relative group">
              <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5"></div>
              <div className="flex-1">Send contract details to Freelancer</div>
              <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                18:00
              </div>

              <span className="badge badge-outline-secondary absolute right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100">
                Pending
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white-light dark:border-white/10">
          <Link
            to="/"
            className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group"
          >
            View All
            <IconArrowLeft className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ml-1 rtl:mr-1" />
          </Link>
        </div>
      </div>
      <div className="panel h-full">
        <div className="flex items-center justify-between dark:text-white-light mb-5">
          <h5 className="font-semibold text-lg">Transactions</h5>
          <div className="dropdown"></div>
        </div>
        <div>
          <div className="space-y-6">
            <div className="flex">
              <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
                SP
              </span>
              <div className="px-3 flex-1">
                <div>Shaun Park</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                +$36.11
              </span>
            </div>
            <div className="flex">
              <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light">
                <IconCashBanknotes />
              </span>
              <div className="px-3 flex-1">
                <div>Cash withdrawal</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  04 Jan 1:00PM
                </div>
              </div>
              <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                -$16.44
              </span>
            </div>
            <div className="flex">
              <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-danger-light dark:bg-danger text-danger dark:text-danger-light">
                <IconUser className="w-6 h-6" />
              </span>
              <div className="px-3 flex-1">
                <div>Amy Diaz</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                +$66.44
              </span>
            </div>
            <div className="flex">
              <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light">
                <IconNetflix />
              </span>
              <div className="px-3 flex-1">
                <div>Netflix</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  04 Jan 1:00PM
                </div>
              </div>
              <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                -$32.00
              </span>
            </div>
            <div className="flex">
              <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light">
                DA
              </span>
              <div className="px-3 flex-1">
                <div>Daisy Anderson</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                +$10.08
              </span>
            </div>
            <div className="flex">
              <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-primary-light dark:bg-primary text-primary dark:text-primary-light">
                <IconBolt />
              </span>
              <div className="px-3 flex-1">
                <div>Electricity Bill</div>
                <div className="text-xs text-white-dark dark:text-gray-500">
                  04 Jan 1:00PM
                </div>
              </div>
              <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">
                -$22.00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel h-full p-0 border-0 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-[#4361ee] to-[#160f6b] min-h-[190px]">
          <div className="flex justify-between items-center mb-6">
            <div className="bg-black/50 rounded-full p-1 pr-3 rtl:pl-3 flex items-center text-white font-semibold">
              <img
                className="w-8 h-8 rounded-full border-2 border-white/50 block object-cover mr-1 rtl:ml-1"
                src="/assets/images/profile-34.jpeg"
                alt="avatar"
              />
              Alan Green
            </div>
            <button
              type="button"
              className="ml-auto rtl:mr-auto flex items-center justify-between w-9 h-9 bg-black text-white rounded-md hover:opacity-80"
            >
              <IconPlus className="w-6 h-6 m-auto" />
            </button>
          </div>
          <div className="text-white flex justify-between items-center">
            <p className="text-xl">Wallet Balance</p>
            <h5 className="ml-auto rtl:mr-auto text-2xl">
              <span className="text-white-light">$</span>2953
            </h5>
          </div>
        </div>
        <div className="-mt-12 px-8 grid grid-cols-2 gap-2">
          <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
            <span className="flex justify-between items-center mb-4 dark:text-white">
              Received
              <IconCaretDown className="w-4 h-4 text-success rotate-180" />
            </span>
            <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">
              $97.99
            </div>
          </div>
          <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
            <span className="flex justify-between items-center mb-4 dark:text-white">
              Spent
              <IconCaretDown className="w-4 h-4 text-danger" />
            </span>
            <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">
              $53.00
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-5">
            <span className="bg-[#1b2e4b] text-white text-xs rounded-full px-4 py-1.5 before:bg-white before:w-1.5 before:h-1.5 before:rounded-full before:mr-2 rtl:before:ml-2 before:inline-block">
              Pending
            </span>
          </div>
          <div className="mb-5 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-[#515365] font-semibold">Netflix</p>
              <p className="text-base">
                <span>$</span> <span className="font-semibold">13.85</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#515365] font-semibold">BlueHost VPN</p>
              <p className="text-base">
                <span>$</span> <span className="font-semibold ">15.66</span>
              </p>
            </div>
          </div>
          <div className="text-center px-2 flex justify-around">
            <button type="button" className="btn btn-secondary mr-2 rtl:ml-2">
              View Details
            </button>
            <button type="button" className="btn btn-success">
              Pay Now $29.51
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
