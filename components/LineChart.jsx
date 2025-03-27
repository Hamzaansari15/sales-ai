"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
const LineChart = () => {
  const chartData = {
    series: [
      {
        name: "Successful call rate",
        data: [12, 20, 34, 45, 43, 39, 51, 43, 67, 80], // Sample data
        color: "#FF0000", // Red
      },
      {
        name: "Failed call rate",
        data: [28, 45, 67, 23, 49, 80, 59, 38, 90, 60], // Sample data
        color: "#0000FF", // Blue
      },
    ],
    options: {
      chart: {
        // type: "line",
        height: 350,
        toolbar: { show: false },
      },
      grid: {
        show: true,
        borderColor: "#E0E0E0",
        strokeDashArray: 5,
        xaxis: {
          lines: { show: true },
        },
        yaxis: {
          lines: { show: true },
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: { style: { colors: "#000" } },
      },
      legend: {
        position: "bottom",
        // labels: { colors: "#000" },
        // markers: { width: 12, height: 12 },
      },
      markers: {
        size: 0,
      },
    },
  };
  return (
    <div className="">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={290}
      />
    </div>
  );
};

export default LineChart;
