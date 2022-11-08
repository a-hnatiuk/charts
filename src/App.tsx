import React from 'react';
import {LineChartComponent} from "./recharts/LineChart";
import {ComposedChartComponent} from "./recharts/ComposedChart";
import ApexMixed from "./apex/mixed";

function App() {
    return (
        <div className="App">
            {/*<h1>Recharts examples</h1>*/}
            {/*<LineChartComponent/>*/}
            {/*<ComposedChartComponent/>*/}
            <h1>Example</h1>
            <ApexMixed />
        </div>
    );
}

export default App;
