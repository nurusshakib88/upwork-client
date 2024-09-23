import React from "react";
import ReactApexChart from "react-apexcharts";

const Sales = ({ series, labels }) => {
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      markers: {
        width: 10,
        height: 10,
        offsetX: -2,
      },

      height: "100",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "29px",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "20px",

              offsetY: 16,
              formatter: (val) => val,
            },
            total: {
              show: true,
              label: "Total",
              color: "#888ea8",
              fontSize: "20px",
              formatter: (w) =>
                w.globals.seriesTotals.reduce((a, b) => a + b, 0),
            },
          },
        },
      },
    },
    labels: labels,
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
    },
  };

  return (
    <div className="panel h-full flex flex-col">
      <h5 className="font-semibold text-lg dark:text-white-light">
        Sales By Category
      </h5>
      <div
        className=" bg-white dark:bg-black rounded-lg overflow-hidden mt-auto "
        id="chart"
      >
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={400}
        />
      </div>
    </div>
  );
};

export default Sales;
