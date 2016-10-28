import React from 'react'
import * as d3 from 'd3'
import { Element } from 'react-faux-dom'
import css from './styles.css'

class PieSliceWithLabel extends React.Component {
    handleClick () {
        console.log('click!')
    }

    render() {
        const data = this.props.data
        const color = this.props.color
        const path = new Element('path')
        let arc = d3.arc()
        .innerRadius(data.data.innerRadius)
        .outerRadius(data.data.outerRadius)
        path.setAttribute('d', arc(data))
        path.setAttribute('style', { 'fill': color, 'cursor' : 'pointer' })
        path.addEventListener('click', this.handleClick)
        return path.toReact()
    }
}

PieSliceWithLabel.propTypes = {
    data: React.PropTypes.object.isRequired
}

export default PieSliceWithLabel