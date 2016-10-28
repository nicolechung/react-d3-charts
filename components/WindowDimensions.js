import React from 'react'
import debounce from 'lodash/debounce'

class WindowDimensions extends React.Component {

    constructor (props) {
        super(props)
        this.state = { width: 1, height: 1 }
    }

    updateDimensions () {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || document.clientWidth || body.clientWidth,
            height = w.innerHeight || document.clientHeight || body.clientHeight
            this.setState({ width: width, height: height })
    }

    componentWillMount () {
        this.updateDimensions()
    }

    componentDidMount () {
        window.addEventListener('resize', debounce(this.updateDimensions.bind(this), 250));
    }

    componentWillUnmount () {
        window.removeEventListener('resize', debounce(this.updateDimensions.bind(this), 250));
    }

    render () {
        return (
            <span> Width: {this.state.width} Height: { this.state.height } </span>
        )
    }
}

export default WindowDimensions