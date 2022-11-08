import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    AreaChart
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];

const rangeData = [
    {
        "day": "05-01",
        "temperature": [27.274858,21.37163]
    },
    {
        "day": "05-02",
        "temperature": [26.981342,21.078114]
    },
    {
        "day": "05-03",
        "temperature": [26.860697,20.957468]
    },
    {
        "day": "05-04",
        "temperature": [28.109165,22.205936]
    },
    {
        "day": "05-05",
        "temperature": [30.35748,24.45425]
    },
    {
        "day": "05-06",
        "temperature": [30.197315,24.294086]
    },
    {
        "day": "05-07",
        "temperature": [30.714333,24.811104]
    },
    {
        "day": "05-08",
        "temperature": [27.274858,21.37163]
    },
    {
        "day": "05-09",
        "temperature": [29.887627,25.165043]
    },
    {
        "day": "05-10",
        "temperature": [30.803095,26.080511]
    },
    {
        "day": "05-1",
        "temperature": [31.00405,26.281466]
    },
    {
        "day": "05-12",
        "temperature": [31.777445,27.054861]
    },
    {
        "day": "05-13",
        "temperature": [28.091047,23.368464]
    },
    {
        "day": "05-14",
        "temperature": [29.71891,24.996326]
    },

]















export const ComposedChartComponent = () => {
    return (
       <>
           <h3>Composed</h3>
           <AreaChart
               width={730}
               height={250}
               data={rangeData}
               margin={{
                   top: 20, right: 20, bottom: 20, left: 20,
               }}
           >
               <XAxis dataKey="day" />
               <YAxis tickCount={5}/>
               <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
               <Tooltip />
           </AreaChart>
           <ComposedChart
               width={470}
               height={250}
               data={data}
               margin={{
                   top: 20,
                   right: 20,
                   bottom: 20,
                   left: 20,
               }}
           >
               <CartesianGrid stroke="#f5f5f5" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Legend />

               {/*<Line type="monotone" dataKey="uv" stroke="#ff7300" />*/}
               <Line dot={false} type="monotone" dataKey="uv" stroke="#ff7300" />
           </ComposedChart>
       </>
    );
}