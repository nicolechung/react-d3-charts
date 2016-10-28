import React from 'react'
import * as d3 from 'd3'
import { Element } from 'react-faux-dom'
import PieSliceWithLabel from './PieSliceWithLabel'

function arcGenerator(d, i) {
        return (
            <PieSliceWithLabel key={`arc-${i}`}
                        arcValue={i}
                        data={d} />
        )
}

const DonutChart2 = ({data, slices}) => {
    const g = new Element('g')
    let pie = d3.pie()
    pie.value((d) => d.magnitude)
    let colors = d3.schemeCategory20c // temporary

    let donutChart = pie(slices)
    donutChart.map((d, i) => { 
        console.log({d: d})
        g.appendChild(<PieSliceWithLabel key={`arc-${i}`}
                        arcValue={i}
                        data={d}
                        color={colors[i]} />)
    })

    g.setAttribute('transform', `translate(${data.x}, ${data.y})`)
    return g.toReact();
}

DonutChart2.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default DonutChart2