import React from "react";

import IconInbox from "../../components/Icon/IconInbox";
import IconTag from "../../components/Icon/IconTag";
import IconCreditCard from "../../components/Icon/IconCreditCard";
const Summary = ({ title1, title2, title3, value1, value2, value3 }) => {
  return (
    <div className="panel h-full flex flex-col">
      <div className="flex items-center justify-between dark:text-white-light">
        <h5 className="font-semibold text-lg">Summary</h5>
      </div>
      <div className="space-y-9 my-auto pb-3">
        <div className="flex items-center">
          <div className="w-9 h-9 mr-3 rtl:ml-3">
            <div className="bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light  rounded-full w-9 h-9 grid place-content-center">
              <IconInbox />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex font-semibold text-white-dark mb-2">
              <h6>{title1}</h6>
              <p className="ml-auto rtl:mr-auto">{value1}</p>
            </div>
            <div className="rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
              <div
                className="bg-gradient-to-r from-[#7579ff] to-[#b224ef]  h-full rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-9 h-9 mr-3 rtl:ml-3">
            <div className="bg-success-light dark:bg-success text-success dark:text-success-light rounded-full w-9 h-9 grid place-content-center">
              <IconTag />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex font-semibold text-white-dark mb-2">
              <h6>{title2}</h6>
              <p className="ml-auto rtl:mr-auto">{value2}</p>
            </div>
            <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
              <div
                className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-9 h-9 mr-3 rtl:ml-3">
            <div className="bg-warning-light dark:bg-warning text-warning dark:text-warning-light rounded-full w-9 h-9 grid place-content-center">
              <IconCreditCard />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex font-semibold text-white-dark mb-2">
              <h6>{title3}</h6>
              <p className="ml-auto rtl:mr-auto">{value3}</p>
            </div>
            <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
              <div
                className="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
