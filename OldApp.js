import React from 'react'
import WindowDimensions from './components/WindowDimensions'
import DonutChart from  './components/DonutChart'
import ResponsiveSVGContainer from  './components/ResponsiveSVGContainer'

class App extends React.Component {
    render() {
        let style =  {
            'shapeRendering': 'crispEdges',
            'textAnchor': 'middle',
            'fontSize' : '5',
            'fontFamily' : 'Verdana',
            'fill': '#000' 
        }

        let donutOptions = { transitionOuterRadius: 10, x: 100, y: 100, innerRadius: 25 }
        donutOptions['style'] = style
        let responsiveOptions = {}
        let viewBox = "0 0 500 500"
        responsiveOptions['viewBox'] = viewBox

        return <div className='container'>
        <WindowDimensions> </WindowDimensions>
        <ResponsiveSVGContainer { ...responsiveOptions }>
            <DonutChart {...donutOptions}
            data={[
                {'number': 92, label: 'Code lines', outerRadius: 100},
                {'number': 40, label: 'Empty lines', outerRadius: 70},
                {'number': 22, label: 'More lines', outerRadius: 50},
                {'number': 22, label: 'Cool text lines', outerRadius: 30},
                {'number': 22, label: 'Almost more lines', outerRadius: 50}
                    ]} />
        </ResponsiveSVGContainer>
        </div>
    }
}

export default App