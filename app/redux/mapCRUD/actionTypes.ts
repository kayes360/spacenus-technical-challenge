export const POLYGON_ADDED = 'polygon_added' as const;
export const POLYGON_AREA_EDITED = 'polygon_area_edited' as const;
export const POLYGON_COLOR_EDITED = 'polygon_color_edited' as const;
export const POLYGON_DELETED = 'polygon_deleted' as const;

export type ActionTypes =
  | typeof POLYGON_ADDED
  | typeof POLYGON_AREA_EDITED
  | typeof POLYGON_COLOR_EDITED
  | typeof POLYGON_DELETED;
