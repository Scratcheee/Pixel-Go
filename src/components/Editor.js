import React, { useState } from "react";
import "../scss/custom.scss"

import { SketchPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import { Button} from 'reactstrap';

function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");
  // const [chosenTool, setChosenTool] = useState("")

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };
  const changeColor = (color) => {
    setColor(color.hex);
  };

  const setEraser = () => {
    setColor("#FFF")
  }


  return (
    <div id="editor">
      <h1>Go Pixel</h1>
      <div id="editorPanel">
        <div id="optionPanel">
          <div id="panelSize">
            <h2>Enter Panel Dimensions</h2>

            <div id="options">
              <div className="option">
                <input
                  type="number"
                  className="panelInput"
                  defaultValue={panelWidth}
                  onChange={(e) => {
                    setPanelWidth(e.target.value);
                  }}
                />
                <span>Width</span>
              </div>
              <div className="option">
                <input
                  type="number"
                  className="panelInput"
                  defaultValue={panelHeight}
                  onChange={(e) => {
                    setPanelHeight(e.target.value);
                  }}
                />
                <span>Height</span>
              </div>
            </div>
          </div>
          <div id="pixelSize">
            <h2>Choose a Tool</h2>
            
              <Button className="toolChange"  >Pen</Button>
            
              <Button className="toolChange" onClick={setEraser}>Eraser</Button>
          </div>
          <SketchPicker color={selectedColor} onChangeComplete={changeColor} />
          <Button
            variant="contained"
            onClick={initializeDrawingPanel}
            size={"large"}
            className="button"
          >
            {buttonText}
          </Button>
        </div>

        <div id="drawingCanvas">
          {hideOptions && (
            <DrawingPanel
              width={panelWidth}
              height={panelHeight}
              selectedColor={selectedColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Editor;
