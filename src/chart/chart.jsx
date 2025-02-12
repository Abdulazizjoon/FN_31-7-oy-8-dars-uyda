import React from "react";
import ReactECharts from "echarts-for-react";

const Chartt = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   top: "5%",
    //   left: "center",
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "70%"],
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

    return (
      <div className="w-full">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
        
      </div>
    );
};

export default Chartt;
