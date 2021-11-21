import React, {useRef} from 'react'
import "../scss/custom.scss"

import Row from './Row'
import {exportComponentAsPNG} from 'react-component-export-image'

function DrawingPanel(props) {
    const {width, height, selectedColor} = props

    const panelRef = useRef()

    let rows = []
    
    //Create an amount of rows of pixels to match the chosen height of the canvas
    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
    }

    return (
        <div id='drawingPanel'>
           <div id="pixels" ref={panelRef}>
               {rows}
           </div>
           <button className="button" onClick={() => exportComponentAsPNG(panelRef)}>Export as PNG</button>
        </div>
    )
}

export default DrawingPanel
