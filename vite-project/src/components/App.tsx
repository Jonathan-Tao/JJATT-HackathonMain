import "./styles.css";
import React from "react";
import { render } from "react-dom";
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


const data2 = [
  {
    name: "Less than $10000",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$10,000 to $14,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$15,000 to $19,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$20,000 to $24,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$25,000 to $29,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$30,000 to $34,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$35,000 to $39,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$40,000 to $44,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$45,000 to $49,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$50,000 to $59,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$60,000 to $74,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$75,000 to $99,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$100,000 to $124,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$125,000 to $149,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$150,000 to $199,999",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
  },
  {
    name: "$200,000 or more",
    percentOfWhiteRespondants: 0,
    percentOfBlackRespondants: 0,
    percentOfHispanicRespondants: 0,
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
      data2[j].percentOfWhiteRespondants = (res[1][i]) / res[1][1] * 100;
      data2[j].percentOfWhiteRespondants = Math.round(data2[j].percentOfWhiteRespondants * 100) / 100;

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
      data2[j].percentOfBlackRespondants = (res[1][i]) / res[1][1] * 100;
      data2[j].percentOfBlackRespondants = Math.round(data2[j].percentOfBlackRespondants * 100) / 100;
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
        data2[j].percentOfHispanicRespondants = (res[1][i]) / res[1][1] * 100;
        data2[j].percentOfHispanicRespondants = Math.round(data2[j].percentOfHispanicRespondants * 100) / 100;
      }
    });

  const data1 = data2;
  const dataIncToPov = [
      {
        name: "Low Wealth",
        nativeparents: 0,
        foreignparents: 0,
        mixed: 0,
      },
      {
        name: "Normal Wealth",
        nativeparents: 0,
        foreignparents: 0,
        mixed: 0,
      },
      {
        name: "High Wealth",
        nativeparents: 0,
        foreignparents: 0,
        mixed: 0,
      }
    ]   
  api_url =
    "https://api.census.gov/data/2020/acs/acs5?get=NAME,group(B05010)&for=us:1&key=1816518312906e0fbd840fe0717a3a4471ad4e12";
  async function getIncToPov() {
      const response = await fetch(api_url);
      const data = await response.json();
      return data;
    }
    getIncToPov().then(res =>{
        console.log(res);
        dataIncToPov[0].nativeparents = res[1][13] / res[1][9];
        dataIncToPov[0].nativeparents = Math.round(dataIncToPov[0].nativeparents * 100) / 100;
        dataIncToPov[0].foreignparents = res[1][17] / res[1][9];
        dataIncToPov[0].foreignparents = Math.round(dataIncToPov[0].foreignparents * 100) / 100;
        dataIncToPov[0].mixed = res[1][21] / res[1][9];
        dataIncToPov[0].mixed = Math.round(dataIncToPov[0].mixed * 100)/ 100 
        dataIncToPov[1].nativeparents = res[1][45] / res[1][41];
        dataIncToPov[1].nativeparents = Math.round(dataIncToPov[1].nativeparents * 100) / 100;
        dataIncToPov[1].foreignparents = res[1][49] / res[1][41];
        dataIncToPov[1].foreignparents = Math.round(dataIncToPov[1].foreignparents * 100) / 100;
        dataIncToPov[1].mixed = res[1][53] / res[1][41];
        dataIncToPov[1].mixed = Math.round(dataIncToPov[1].mixed * 100)/ 100;
        dataIncToPov[2].nativeparents = res[1][77] / res[1][73];
        dataIncToPov[2].nativeparents = Math.round(dataIncToPov[2].nativeparents * 100) / 100;
        dataIncToPov[2].foreignparents = res[1][81] / res[1][73];
        dataIncToPov[2].foreignparents = Math.round(dataIncToPov[2].foreignparents * 100) / 100;
        dataIncToPov[2].mixed = res[1][85] / res[1][73];
        dataIncToPov[2].mixed = Math.round(dataIncToPov[2].mixed * 100)/ 100 
    })
    
  








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
                data={data1}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentOfWhiteRespondants" fill="#F58024" />
                <Bar dataKey="percentOfBlackRespondants" fill="#994FB2" />
                <Bar dataKey="percentOfHispanicRespondants" fill="#589C48" />
              </BarChart>
            </ResponsiveContainer>
          </ParallaxLayer>

          <ParallaxLayer offset={2}>
              <ResponsiveContainer
              width="100%"
              height="100%"
              >
              
              <BarChart
                data = {dataIncToPov}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="nativeparents" fill="#F58024" />
                <Bar dataKey="foreignparents" fill="#994FB2" />
                <Bar dataKey="mixed" fill="#589C48" />
              </BarChart>
              </ResponsiveContainer>

          </ParallaxLayer>
        </Parallax>
      </div>
      </>
      )
}

