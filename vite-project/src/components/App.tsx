import "./styles.css";
import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import wPS from "./img/wPS.png";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
  {
    name: "Less than $10000",
    PercentOfWhiteRespondants: 0,
    PercentOfBlackRespondants: 0,
    PercentOfHispanicRespondants: 0,
  },
];

export default function App() {
  let api_url =
    "https://api.census.gov/data/2020/acs/acs5?get=NAME,group(B19001A)&for=us:1&key=1816518312906e0fbd840fe0717a3a4471ad4e12";
  async function getApi() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  }
  
  getApi().then((res) => {
    console.log(res)
    for (let i = 5, j = 0; i < res[1].length - 4; i += 4, j++) {
      data1[j].PercentOfWhiteRespondants = (res[1][i]) / res[1][1] * 100;
      data1[j].PercentOfWhiteRespondants = Math.round(data1[j].PercentOfWhiteRespondants * 100) / 100;

    }
  });
  api_url =
    "https://api.census.gov/data/2020/acs/acs5?get=NAME,group(B19001B)&for=us:1&key=1816518312906e0fbd840fe0717a3a4471ad4e12";
  async function getApi2() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  }
  getApi().then((res) => {
    for (let i = 5, j = 0; i < res[1].length - 4; i += 4, j++) {
      data1[j].PercentOfBlackRespondants = (res[1][i]) / res[1][1] * 100;
      data1[j].PercentOfBlackRespondants = Math.round(data1[j].PercentOfBlackRespondants * 100) / 100;
    }
  });

  api_url = 
    "https://api.census.gov/data/2020/acs/acs5?get=NAME,group(B19001I)&for=us:1&key=1816518312906e0fbd840fe0717a3a4471ad4e12";
  async function getApi3() {
      const response = await fetch(api_url);
      const data = await response.json();
      return data;
    }
    getApi().then((res) => {
      for (let i = 5, j = 0; i < res[1].length - 4; i += 4, j++) {
        data1[j].PercentOfHispanicRespondants = (res[1][i]) / res[1][1] * 100;
        data1[j].PercentOfHispanicRespondants = Math.round(data1[j].PercentOfHispanicRespondants * 100) / 100;
      }
    });

  return (
    <>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer
            style={{
              backgroundImage: `url(${wPS})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer offset={1}>
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                width={1500}
                height={500}
                data={data1}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PercentOfWhiteRespondants" fill="#F58024" />
                <Bar dataKey="PercentOfBlackRespondants" fill="#994FB2" />
                <Bar dataKey="PercentOfHispanicRespondants" fill="#589C48" />
              </BarChart>
            </ResponsiveContainer>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
