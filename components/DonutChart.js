import React from 'react'
import LabeledArc from './LabelledArc'
import d3, { pie, schemeCategory10, schemeCategory20c } from 'd3'

class DonutChart extends React.Component {
    constructor() {
        super();
        this.pie = pie()
        this.pie.value((d) => d.number)
        this.colors = schemeCategory20c
    }

    arcGenerator(d, i) {
        return (
            <LabeledArc key={`arc-${i}`}
                        arcValue={i}
                        data={d}
                        style={this.props.style}
                        midAngle={(d.startAngle + d.endAngle)/2}
                        innerRadius={this.props.innerRadius}
                        outerRadius={d.data.outerRadius}
                        color={this.colors[i]} />
        )
    }

    render() {
        let donutChart = this.pie(this.props.data),
            translate = `translate(${this.props.x}, ${this.props.y})`
        
        return (
            <g transform={translate}>
                {donutChart.map((d, i) => this.arcGenerator(d, i))}
            </g>
        )
    }
}

export default DonutChart