import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

const data = [
    {
        name: '0',
        baseLine: 1000,
        optimizer: 1200,
        saved: 500,
        optimization: 300,
    },
    {
        name: '5',
        baseLine: 0,
        optimizer: 0,
        saved: 0,
        optimization: 0,
    },
    {
        name: '10',
        baseLine: 3,
        optimizer: 3,
        saved: 3,
        optimization: 3,
    },
    {
        name: '15',
        baseLine: 3,
        optimizer: 3,
        saved: 3,
        optimization: 3,
    },
    {
        name: '20',
        baseLine: 3,
        optimizer: 3,
        saved: 3,
        optimization: 3,
    },
    {
        name: '25',
        baseLine: 3,
        optimizer: 3,
        saved: 3,
        optimization: 3,
    },
    // {
    //     name: 'Page A',
    //     uv: 4000,
    //     pv: 2400,
    //     amt: 2400,
    // },
    // {
    //     name: 'Page B',
    //     uv: 3000,
    //     pv: 1398,
    //     amt: 2210,
    // },
    // {
    //     name: 'Page C',
    //     uv: 2000,
    //     pv: 9800,
    //     amt: 2290,
    // },
    // {
    //     name: 'Page D',
    //     uv: 2780,
    //     pv: 3908,
    //     amt: 2000,
    // },
    // {
    //     name: 'Page E',
    //     uv: 1890,
    //     pv: 4800,
    //     amt: 2181,
    // },
    // {
    //     name: 'Page F',
    //     uv: 2390,
    //     pv: 3800,
    //     amt: 2500,
    // },
    // {
    //     name: 'Page G',
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100,
    // },
];

export const LineChartComponent = () => {
    return (
        <>
            <h3>Line</h3>
            <LineChart
                width={1121}
                height={508}
                data={data}
            >
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="name">
                    <Label value="Hours" position="outside" />
                </XAxis>
                <YAxis tickCount={500} label={{ value: 'Costs (NOK)', position: 'insideTopLeft' }} />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="baseLine"
                    stroke="#00AF81"
                />
                <Line type="monotone" dataKey="optimizer" stroke="#FF6B00" />
                <Line type="monotone" dataKey="saved" stroke="#6EFFED" />
                <Line type="monotone" dataKey="optimization" stroke="#8681F7" />
            </LineChart>
        </>
    );
};
