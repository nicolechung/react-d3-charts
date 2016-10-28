import React from 'react'
import ReactDOM from 'react-dom'
import { scale, select, ease } from 'd3'
import Arc from './Arc'

class LabelledArc extends Arc {

    constructor (props) {
        super(props)
    }

    convertRadiansToDegrees (rad) {
        return (rad * 180) / Math.PI
    }

    handleClick (e, arc, props) {
        let arcLarge = arc
        arcLarge.innerRadius(this.props.innerRadius-10)
        .outerRadius(this.props.outerRadius+10)
        .startAngle(this.props.data.startAngle)
        .endAngle(this.props.data.endAngle)
        select(ReactDOM.findDOMNode(this).children[0])
            .transition()
            .duration(500)
            .attr('d', arcLarge)
    }

    renderInnerLabel(props, arc) {
         let label = props.data.label;
         let centroid = arc.centroid(props)
         console.log({
             centroid: centroid
         })
    return (
        <text
          className='donut-label'
          transform={`translate(${centroid})`}
          dy='.35em'
          style={{
            'shapeRendering': 'crispEdges',
            'textAnchor': 'middle',
            'font-size' : '10',
            'font-family' : 'Verdana',
            'fill': '#000'
          }}>
          { label }
        </text>
      );
    }

    renderOuterLabel (props, arc) {
        console.log({
            start: props.startAngle
        })
        var rotate = `rotate(${ (props.startAngle+props.endAngle)/2 * (180/Math.PI) })`;
        var positions = arc.centroid(props);
        var radius = props.data.outerRadius;
        var dist   = radius + 20;
        var angle  = (props.startAngle + props.endAngle) / 2;
        var x      = dist * (1.2 * Math.sin(angle));
        var y      = -dist * Math.cos(angle);
        var t = `translate(${x},${y})`;
        let label = props.data.label;
        console.log({
            rotate: rotate,
            position: positions,
            radius: radius,
            dist: dist,
            angle: angle,
            x: x,
            y: y,
            t: t
        })
        console.log('text anchor')
        console.log(this.props.style);
    return  (
      <g>
        <line
          x1='0'
          x2='0'
          y1={-radius - 2}
          y2={-radius - 26}
          stroke={props.labelTextFill}
          transform={rotate}
          style={{
            'fill': '#000',
            'strokeWidth': 2
          }}
          >
        </line>
        <text
          className='rd3-piechart-label'
          transform={t}
          dy='.35em'
          style={{
            'textAnchor': this.props.style.textAnchor,
            'fill': this.props.style.fill,
            'font-size': this.props.style.fontSize,
            'fontFamily': this.props.style.fontFamily,
            'shapeRendering': this.props.style.shapeRendering
          }}>
          {label}
        </text>
      </g>
    );
    }

    render () {
        console.log({
            arc: this.arc,
            props: this.props   
        })
        return ( 
            <g onClick={event => this.handleClick(event, this.arc, this.props.data)}>
                { super.render() }
                { this.renderOuterLabel(this.props.data, this.arc) }
            </g>
        )
    }
}

export default LabelledArc;