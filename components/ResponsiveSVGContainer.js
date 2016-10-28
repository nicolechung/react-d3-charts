import React from 'react'
import css from './styles.css'

class ResponsiveSVGContainer extends React.Component {
    render () {
        return (
            <div className={css.svgContainer}>
                <svg viewBox={this.props.viewBox} preserveAspectRatio="xMaxYMax meet">{this.props.children}</svg>    
            </div>
        )
    }
}

export default ResponsiveSVGContainer