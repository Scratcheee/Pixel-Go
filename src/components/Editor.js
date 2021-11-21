import React, { useState } from "react";
import "../scss/custom.scss";

import { SketchPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import { Button } from "reactstrap";

function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");
  const [penColor, setPenColor] = useState("#f44336")
  const eraser = "#fff"
  // const [chosenTool, setChosenTool] = useState("")


  //Show drawing panel and hide panel size selection
  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  // Sets pen color to chosen color
  const changeColor = (color) => {
    setPenColor(color.hex)
    setColor(color.hex);
  };

  //sets current tool as a white (#fff) eraser
  const chooseEraser = () => {
    setColor(eraser)
    
  };

  //sets current tool back to pen as the previous 

  const choosePen = () => {
    setColor(penColor)
  }

  return (
    <div id="editor">
      <h1>Go Pixel</h1>
      <div id="editorPanel">
        <div id="optionPanel">
          {hideDrawingPanel && (
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
          )}

          <div id="pixelSize">
            <h2>Choose a Tool</h2>

            <Button className="toolChange" onClick={choosePen}>Pen</Button>

            <Button className="toolChange" onClick={chooseEraser}>
              Eraser
            </Button>
          </div>
          <SketchPicker color={penColor} onChangeComplete={changeColor} />
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
