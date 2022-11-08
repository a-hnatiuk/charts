import React from 'react';
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

type ApexState = {
    series: any;
    options: any;
}

export default class ApexChart extends React.Component {
    state: ApexState = {
        series: [
            {
                type: 'rangeArea',
                name: 'allowed range',
                data: [
                    {
                        x: '10-07',
                        y: [27.274858,21.37163]
                    },
                    {
                        x: '10-08',
                        y: [26.981342,21.078114]
                    },
                    {
                        x: '10-09',
                        y: [26.860697,20.957468]
                    },
                    {
                        x: '10-10',
                        y: [28.109165,22.205936]
                    },
                    {
                        x: '10-11',
                        y: [30.35748,24.45425]
                    },
                    {
                        x: '10-12',
                        y: [30.197315,24.294086]
                    },
                    {
                        x: '10-13',
                        y: [30.714333,24.811104]
                    },
                    {
                        x: '10-14',
                        y: [27.274858,21.37163]
                    },
                    {
                        x: '10-15',
                        y: [29.887627,25.165043]
                    },
                    {
                        x: '10-16',
                        y: [30.803095,26.080511]
                    },
                    {
                        x: '10-17',
                        y: [31.00405,26.281466]
                    },
                    {
                        x: '10-18',
                        y: [31.777445,27.054861]
                    },
                    {
                        x: '10-19',
                        y: [28.091047,23.368464]
                    },
                    {
                        x: '10-20',
                        y: [29.71891,24.996326]
                    },

                ]
            },
            {
                type: 'line',
                name: 'baseline',
                data: [
                    {
                        x: '10-07',
                        y: 24.323244
                    },
                    {
                        x: '10-08',
                        y: 24.029728
                    },
                    {
                        x: '10-09',
                        y: 23.909082
                    },
                    {
                        x: '10-10',
                        y: 25.15755
                    },
                    {
                        x: '10-11',
                        y: 27.405865
                    },
                    {
                        x: '10-12',
                        y: 27.2457
                    },
                    {
                        x: '10-13',
                        y: 27.762718
                    },
                    {
                        x: '10-14',
                        y: 24.323244
                    },
                    {
                        x: '10-15',
                        y: 27.526335
                    },
                    {
                        x: '10-16',
                        y: 28.441803
                    },
                    {
                        x: '10-17',
                        y: 28.642757
                    },
                    {
                        x: '10-18',
                        y: 29.416153
                    },
                    {
                        x: '10-19',
                        y: 25.729755
                    },
                    {
                        x: '10-20',
                        y: 27.357618
                    },

                ]
            },
            {
                type: 'line',
                name: 'actual observations',
                data: [
                    {
                        x: '10-07',
                        y: 26.615
                    },
                    {
                        x: '10-08',
                        y: 25.563
                    },
                    {
                        x: '10-09',
                        y: 23.701
                    },
                    {
                        x: '10-10',
                        y: 24.355
                    },
                    {
                        x: '10-11',
                        y: 26.169
                    },
                    {
                        x: '10-12',
                        y: 24.473
                    },
                    {
                        x: '10-13',
                        y: 32.45
                    },
                    {
                        x: '10-14',
                        y: 25.375
                    },
                ]
            }
        ],
        options: {
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
                }
            },
            yaxis: {
                decimalsInFloat: 2,
            }
        },


    };


    render() {
        return (


            <div id="chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    // @ts-ignore-next-line
                    type="rangeArea" height={500}/>
            </div>


        );
    }
}