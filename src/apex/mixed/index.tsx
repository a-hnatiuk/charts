import React from 'react';
import Chart from "react-apexcharts";
import mockData from '../../mockData/costs.json';
import { ApexOptions } from "apexcharts";

export const ApexChart = () => {
    const {rangeArea, baseline, observations} = JSON.parse(JSON.stringify(mockData));
    const series: ApexOptions['series'] = [
        {
            type: 'rangeArea',
            name: 'allowed range',
            data: rangeArea
        },
        {
            type: 'line',
            name: 'baseline',
            data: baseline
        },
        {
            type: 'line',
            name: 'actual observations',
            data: observations
        }
    ];
    const options: ApexOptions = {
        colors: [ '#58CCF2', '#2042B9', '#f47216'],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: [0.5, 1, 1]
        },
        forecastDataPoints: {
            count: 6
        },
        stroke: {
            curve: 'straight',
            width: [0, 2, 2]
        },
        legend: {
            show: true,
            position: 'top',
            height: 40,
            horizontalAlign: 'right',
            customLegendItems: ['allowed range', 'baseline', 'actual observations'],
        },
        title: {
            text: 'Costs (NOK)'
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        xaxis: {
            labels: {
                rotateAlways: true,
            },
            title: {
                text: 'Hours',
                offsetY: 120,
            },
        },
        yaxis: {
            decimalsInFloat: 2,
        },
        annotations: {
           xaxis: [
               {
                   x: '10-14',
                   borderColor: '#fb0101',
                   opacity: 1,
                   label: {
                       style: {
                           background: '#fb0101',
                           color: '#fff',
                       },
                       text: 'Selected day'
                   }
               }
           ]
        }
    };


    return (
        <div id="chart">
            <Chart
                options={options}
                series={series}
                // @ts-ignore-next-line
                type="rangeArea" height={500}/>
        </div>
    );
}