import {
    POLYGON_ADDED,
    POLYGON_AREA_EDITED,
    POLYGON_COLOR_EDITED,
    POLYGON_DELETED, 
  } from './actionTypes';
  import { Action } from './actions';
  
  interface Polygon {
    id: number;
    latlngs?: number[];
    strokeColor?: string;
    fillColor?: string;
  }
  
  const initialState: Polygon[] = [];
  
  const mapReducer = (state = initialState, action: Action): Polygon[] => {
    switch (action.type) {
      case POLYGON_ADDED:
        return Array.isArray(action.payload)
          ? [...state, ...action.payload]
          : [...state, action.payload];
  
      case POLYGON_AREA_EDITED:
        return state.map((polygon) =>
          polygon.id === action.payload.id
            ? { ...polygon, latlngs: action.payload.latlngs }
            : polygon
        );
  
      case POLYGON_COLOR_EDITED: {
        const { id, colorType, colorValue } = action.payload;
        return state.map((polygon) =>
          polygon.id === id
            ? {
                ...polygon,
                [colorType === 'stroke' ? 'strokeColor' : 'fillColor']: colorValue,
              }
            : polygon
        );
      }
  
      case POLYGON_DELETED:
        return state.filter((polygon) => polygon.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  export default mapReducer;
  