import React from "react";
import ReactApexChart from "react-apexcharts";
import IconShoppingCart from "../../components/Icon/IconShoppingCart";

const TotalOrders = () => {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";
  const totalOrders = {
    series: [
      {
        name: "Sales",
        data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
      },
    ],
    options: {
      chart: {
        height: 290,
        type: "area",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: isDark ? ["#00ab55"] : ["#00ab55"],
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      yaxis: {
        min: 0,
        show: false,
      },
      grid: {
        padding: {
          top: 125,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.3,
          opacityTo: 0.05,
          stops: [100, 100],
        },
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="panel h-full p-0">
      <div className="flex items-center justify-between w-full p-5 absolute">
        <div className="relative">
          <div className="text-success dark:text-success-light bg-success-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
            <IconShoppingCart />
          </div>
        </div>
        <h5 className="font-semibold text-2xl text-right rtl:text-left dark:text-white-light">
          3,192
          <span className="block text-sm font-normal">Total Orders</span>
        </h5>
      </div>
      <div className="bg-transparent rounded-lg overflow-hidden">
        <ReactApexChart
          series={totalOrders.series}
          options={totalOrders.options}
          type="area"
          height={290}
        />
      </div>
    </div>
  );
};

export default TotalOrders;
