import React from 'react'
import DonutChart2 from './components/DonutChart2'

class App extends React.Component {
    render() {
        const props = {}
        props.data = {}
        props.data.x = 100
        props.data.y = 100
        props.data.innerRadius = 10
        props.data.outerRadius = 10
        props.data.style = {}
        props.data.style.fillColor = "#ff0000"
       return (
           <div><h1>Hi</h1>
                <svg viewBox="0 0 1000 1000">
                    <DonutChart2 {...props}
                    slices={[
                        {'number': 92, label: 'Code lines', outerRadius: 100},
                        {'number': 40, label: 'Empty lines', outerRadius: 70},
                        {'number': 22, label: 'More lines', outerRadius: 50},
                        {'number': 22, label: 'Cool text lines', outerRadius: 30},
                        {'number': 22, label: 'Almost more lines', outerRadius: 50}
                    ]}
                     />
                </svg>
            </div> 
       )
    }
}

export default App