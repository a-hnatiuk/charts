import React from 'react';
import {LineChartComponent} from "./recharts/LineChart";
import {ComposedChartComponent} from "./recharts/ComposedChart";
import {ApexChart} from "./apex/mixed";

function App() {
    return (
        <div className="App" style={{maxWidth: 700, margin: '20px auto 0'}}>
            {/*<h1>Recharts examples</h1>*/}
            {/*<LineChartComponent/>*/}
            {/*<ComposedChartComponent/>*/}
            <h1>Example</h1>
            <ApexChart />
        </div>
    );
}

export default App;
