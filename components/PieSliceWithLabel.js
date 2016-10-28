import React from 'react'
import * as d3 from 'd3'
import { Element } from 'react-faux-dom'
import css from './styles.css'

const PieSliceWithLabel = ({data, color}) => {
    const path = new Element('path')

    let arc = d3.arc()
    .innerRadius(data.innerRadius)
    .outerRadius(data.outerRadius)

    path.setAttribute('d', arc(data))
    path.setAttribute('style', { 'fill': color})

    return path.toReact()
}

PieSliceWithLabel.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default PieSliceWithLabel