import React from 'react'
import BasicArc from './components/BasicArc'

class App extends React.Component {
    render() {
        const props = {}
        props.data = {}
        props.data.innerRadius = 10
        props.data.outerRadius = 10
        props.data.style = {}
        props.data.style.fillColor = "#ff0000"
       return (
           <div><h1>Hi</h1>
                <svg viewBox="0 0 100 100">
                    <BasicArc {...props} />
                </svg>
            </div> 
       )
    }
}

export default App