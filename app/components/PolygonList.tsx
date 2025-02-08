"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POLYGON_COLOR_EDITED } from "@/app/redux/mapCRUD/actionTypes";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { RootState } from "@/app/redux/store";  
interface Polygon {
  id: number; 
  stroke?: string;
  fill?: string;
}
 
type ColorType = "stroke" | "fill" | "";

export default function PolygonList(): JSX.Element { 
  const mapData = useSelector((state: RootState) => state.mapData);
  const dispatch = useDispatch();

  const [activePolygon, setActivePolygon] = useState<number | null>(null);
  const [colorType, setColorType] = useState<ColorType>("");
  const [color, setColor] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPolygons = mapData.filter((polygon: Polygon) =>
    polygon.id.toString().includes(searchTerm)
  );

  const applyColorChange = (polygonId: number): void => {
    if (color) {
      dispatch({
        type: POLYGON_COLOR_EDITED,
        payload: {
          id: polygonId,
          colorType,
          colorValue: color,
        },
      });
      resetState();
    }
  };

  const resetState = (): void => {
    setActivePolygon(null);
    setColor("");
    setColorType("");
  };

  return (
    <div className="list-wrapper">
      <h2 className="list-title">Polygon List</h2>

      {/* Search Bar */}
      {mapData.length > 0 && (
        <input
          type="text"
          placeholder="Search by Polygon ID"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setSearchTerm(e.target.value)
          }
          className="search-input"
        />
      )}

      {filteredPolygons.length === 0 ? (
        <p>
          {mapData.length > 0
            ? "No matching polygons found."
            : "No polygons available."}
        </p>
      ) : (
        <ul className="list-data-wrapper">
          {filteredPolygons.map((polygon: Polygon) => (
            <li key={polygon.id} className="list-item">
              <span>Polygon ID: {polygon.id}</span>
              <div className="list-item-button-container">
                <div className="list-item-button-wrapper">
                  <button
                    onClick={() => {
                      setActivePolygon(polygon.id);
                      setColorType("stroke");
                    }}
                    className="button button-blue button-sm"
                  >
                    Change Stroke Color
                  </button>
                  <button
                    onClick={() => {
                      setActivePolygon(polygon.id);
                      setColorType("fill");
                    }}
                    className="button button-orange button-sm"
                  >
                    Change Fill Color
                  </button>
                </div>

                {/* Color Picker Dropdown */}
                {activePolygon === polygon.id && (
                  <div className="color-picker-container">
                    <div>
                      <HexAlphaColorPicker color={color} onChange={setColor} />
                      <HexColorInput
                        color={color}
                        onChange={setColor}
                        className="color-input"
                        placeholder="Type HEX Color Code (e.g., #000000)"
                      />
                    </div>

                    <div className="color-picker-button-wrapper">
                      <button
                        onClick={resetState}
                        className="button button-gray"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => applyColorChange(polygon.id)}
                        className="button button-blue"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}