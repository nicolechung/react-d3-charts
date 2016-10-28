import React from 'react'
import * as d3 from 'd3'
import { Element } from 'react-faux-dom'

const BasicArcForChart = ({data}) => {
    const path = new Element('path')

    let arc = d3.arc()
    .innerRadius(data.innerRadius)
    .outerRadius(data.outerRadius)

    path.setAttribute('d', arc(data))
    path.setAttribute('style', { 'fill': data.style.fillColor})

    return path.toReact()
}

BasicArc.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default BasicArcForChart