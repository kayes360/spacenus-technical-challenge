import {
    POLYGON_ADDED,
    POLYGON_COLOR_EDITED,
    POLYGON_DELETED,
    ActionTypes,
  } from './actionTypes';
  
  interface Polygon {
    id: number;
    latlngs?: number[];
    strokeColor?: string;
    fillColor?: string;
  }
  
  export interface Action<T = any> {
    type: ActionTypes;
    payload: T;
  }
  
  export const polygonAdded = (polygon: Polygon | Polygon[]): Action<Polygon | Polygon[]> => ({
    type: POLYGON_ADDED,
    payload: polygon,
  });
  
  export const polygonColorEdited = (
    id: number,
    colorType: 'stroke' | 'fill',
    colorValue: string
  ): Action<{ id: number; colorType: 'stroke' | 'fill'; colorValue: string }> => ({
    type: POLYGON_COLOR_EDITED,
    payload: { id, colorType, colorValue },
  });
  
  export const polygonDeleted = (polygonId: number): Action<number> => ({
    type: POLYGON_DELETED,
    payload: polygonId,
  });
  