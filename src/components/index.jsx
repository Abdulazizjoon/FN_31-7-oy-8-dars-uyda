import React from 'react'
import gerb from '../imgs/gerb.png'
import num from '../imgs/num.png'
import user from "../imgs/user.png";
import miyya from "../imgs/miyya.png";
import Chartt from '../chart/chart';
import ReactECharts from "echarts-for-react"
import  Group  from '../imgs/Group.png';
function Platforma() {
  const value = 33;

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value / 100, "#EF233C"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };
  let value1=79
  const option1 = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value1 / 100, "#28A264"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };
  let value2 = 78;
  const option2 = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value2 / 100, "#28A264"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };
  let value3 = 48;
  const option3 = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value3 / 100, "#F8B324"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };
  let value4 = 100;
  const option4 = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value4 / 100, "#0956AF"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };
  let value5 = 55;
  const option5 = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [value5 / 100, "#F8B324"],
              [1, "#E0E0E0"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value }],
      },
    ],
  };

  const option6 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  return (
    <div>
      <div className="container flex mx-auto w-[1312px] mt-10 justify-between">
        <div className="w-52">
          <img className="text-center ml-[25%]" src={gerb} alt="" />
          <p className="text-center text-[14px] font-semibold">
            Давлат хизматининг ягона электрон ахборот-таҳлил тизими
          </p>
        </div>
        <div>
          <p className="text-4xl text-center mt-10 w-[644px]">
            Республика Ассессмент маркази онлайн платформаси
          </p>
        </div>
        <div>
          <img src={num} alt="" />
        </div>
      </div>
      <div className="container flex mx-auto w-[1312px] mt-9">
        <div className="flex gap-8">
          <div>
            <img src={user} alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-4xl">Азамат Шарипов</h2>
            <p className="text-3xl mb-8">Абдуллажон угли</p>
            <div className="flex gap-4">
              <p className="text-[#495057] text-xl">Тугилган сана:</p>
              <p className="text-[#212529] text-xl">30.09.1997 йил</p>
            </div>
            <div className="flex gap-4">
              <p className="text-[#495057] text-xl">Тугилган жой:</p>
              <p className="text-[#212529] text-xl">Чуст ш., Наманган.</p>
            </div>
            <div className="flex mt-10 gap-3">
              <div>
                <p>Буйи:</p>
                <span className="font-medium mt-0.5">175cm</span>
              </div>
              <div>
                <p>Вазни:</p>
                <span className="font-medium mt-0.5">70кг</span>
              </div>
              <div>
                <p>Индекс</p>
                <span className="font-medium mt-0.5">22,9</span>
              </div>
              <div className="-mt-10">
                <Chartt />
                <p className="text-[#0956AF] -mt-6 text-center">Норма</p>
              </div>
            </div>
          </div>
          <div className="ml-64">
            <p className="text-[#495057]">Лавозими:</p>
            <p className="w-[421px] text-xl mb-3">
              Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
              вазири уринбосари
            </p>
            <p className="text-[#495057]">Номзод:</p>
            <p className="w-[421px] text-xl ">
              Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
              вазири
            </p>
          </div>
        </div>
      </div>
      <div className="mt-11 container mx-auto w-[1312px]">
        <div className="flex gap-2.5 items-center">
          <div className="w-3 h-11 bg-[#0956AF]"></div>
          <p className="text-4xl font-semibold w-[290px]">Билим тести</p>
          <div className="w-full bg-[#DEE2E6] h-1 mt-2"></div>
        </div>
        <div className="flex">
          <div className="flex mt-8 w-[644px] flex-wrap">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[125px]">33%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[130px]">
                Конституциявий-хукукий саводхонлик
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option1}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[125px]">79%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[130px]">
                Ахборот-коммуникация технологиялари
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option2}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[125px]">78%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[130px]">
                Турли сохадаги ислохотлардан хабардорлик
              </p>
            </div>
            <div
              className="mt-10"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option3}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[125px]">48%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[130px]">
                Узбек тили ва адабиёти
              </p>
            </div>
            <div
              className="mt-10"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option4}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[130px]">100%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[140px]">
                Узбекистон тарихи ва маданияти
              </p>
            </div>
            <div
              className="mt-10"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactECharts
                option={option5}
                style={{ width: "200px", height: "150px" }}
              />
              <p className="-mt-10 text-3xl -ml-[125px]">55%</p>
              <p className="text-center w-[198px] mt-[70px] -ml-[130px]">
                Аклий салохияти ва мантикий фикрлаш
              </p>
            </div>
          </div>
          <div>
            <ReactECharts
              option={option6}
              style={{ width: "400px", height: "300px" }}
            />
            <p className="text-5xl text-[#0956AF] -mt-7">78%</p>
            <div className="w-[333px bg-[#DEE2E6] rounded-md mt-1.5">
              <p className="w-[264px] bg-[#28A264] text-white rounded-md p-2">
                Умумий натижа
              </p>
            </div>
          </div>
          <div>
            <div className='flex h-[54px]'>
              <img src={miyya} alt="" />
              <p className="w-[179px]">
                <span className="text-xl text-[#212529]">90 фоиз</span>{" "}
                иштирокчидан яхширок натижа
              </p>
            </div>
            <img className='mt-6' src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platforma