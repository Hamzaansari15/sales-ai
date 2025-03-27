"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const chartData = {
    series: [150, 50], // Used APIs, Remaining APIs
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Used APIs", "Remaining APIs"],
      colors: ["#007BFF", "#D3D3D3"], // Blue for used, Grey for remaining
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false, // Hide labels inside the donut
            },
          },
        },
      },
      dataLabels: {
        enabled: false, // Hide percentage labels
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={220}
        width={220}
      />
    </div>
  );
};

export default PieChart;
