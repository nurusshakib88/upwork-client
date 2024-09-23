import React from "react";
import ReactApexChart from "react-apexcharts";
import IconDollarSign from "../../components/Icon/IconDollarSign";
const DailySales = () => {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";
  const dailySales = {
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 21],
      },
      {
        name: "Last Week",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
    ],
    options: {
      chart: {
        height: 160,
        type: "bar",
        fontFamily: "Nunito, sans-serif",
        toolbar: {
          show: false,
        },
        stacked: true,
        stackType: "100%",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
      },
      colors: isDark ? ["#e2a03f", "#e0e6ed"] : ["#e2a03f", "#e0e6ed"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 10,
          right: -20,
          bottom: -20,
          left: -20,
        },
      },
    },
  };

  return (
    <div className="panel h-full sm:col-span-2 xl:col-span-1">
      <div className="flex items-center mb-5">
        <h5 className="font-semibold text-lg dark:text-white-light">
          Daily Sales
          <span className="block text-white-dark text-sm font-normal">
            Go to columns for details.
          </span>
        </h5>
        <div className="ml-auto rtl:mr-auto relative">
          <div className="w-11 h-11 text-warning bg-[#ffeccb] dark:bg-warning dark:text-[#ffeccb] grid place-content-center rounded-full">
            <IconDollarSign />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
          <ReactApexChart
            series={dailySales.series}
            options={dailySales.options}
            type="bar"
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default DailySales;
