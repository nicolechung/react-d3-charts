import React from 'react'
import { arc } from 'd3'

class Arc extends React.Component {
    constructor () {
        super()
        this.arc = arc()
    }

    componentWillMount () {
        console.log(this.props)
        this.updateD3(this.props)
    }

    componentWillReceiveNewProps (newProps) {
        this.updateD3(newProps)
    }

    updateD3 (newProps) {   
        this.arc.innerRadius(newProps.innerRadius)
        this.arc.outerRadius(newProps.outerRadius)
    }

    render () {
        return (
            <path d={this.arc(this.props.data)}
                  style={{fill: this.props.color}} ></path>
        )
    }
}

export default Arc