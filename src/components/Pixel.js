import React, {useState} from 'react'
import "../styles/pixel.scss"

function Pixel(props) {
    const {selectedColor} = props
    const [pixelColor, setPixelColor] = useState('#fff')
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    const applyColor = () => {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
    }

    const changeColorOnhover = () => {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
    }

    const resetColor = () => {
        if(canChangeColor) {
            setPixelColor(oldColor)
        
        }
        setCanChangeColor(true)
    }



    return (
        <div className='pixel' style={{backgroundColor: pixelColor}} onClick={applyColor} onMouseEnter={changeColorOnhover} onMouseLeave={resetColor}>
            
        </div>
    )
}

export default Pixel
