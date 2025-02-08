# Spacenus Technical Challenge

## Project Overview
This project is a fully functional Next.js application designed to provide polygon creation and management features on an interactive map. It allows users to draw, customize, and manage polygons, calculate their areas, and export/import polygon data. The app integrates React Leaflet for map functionalities and Redux Toolkit for state management.

## Live Demo
[View the live application](https://spacenus-technical-challenge.vercel.app/)

## Repository
[GitHub Repository](https://github.com/kayes360/spacenus-technical-challenge)

---

## Features
### Core Functionality
- **Polygon Drawing:** Users can create custom polygons on the map.
- **Polygon Customization:** User can further update polygon. 
- **Polygon Color Customization:** Change polygon fill and boundary colors using hex codes.
- **Marker Placement:** A marker is shown at the center of each polygon..
- **Area Calculation:** Tooltip displays polygon area when hovering over the marker.
- **Polygon CRUD functionality:** User can perform CRUD(CREATE,READ,UPDATE,DELETE) polygon data from the ui.

### Advanced Features
- **Data Export/Import:** Export polygon data (coordinates, colors, labels) as a JSON file and import it back.
- **Geolocation:** Auto-center map based on user’s geolocation.(Only if user provides browser's window to access users location data otherwise a default location is shown).
- **Polygon Validation:** Prevent overlapping or intersecting polygons with validation feedback.
- **Search & Filter:** Filter polygons by polygon IDs.


---

## Tech Stack
- **Framework:** Next.js 
- **State Management:** Redux Toolkit
- **Map Library:** React Leaflet
- **Styling:** SCSS (Sass)
- **Language:** TypeScript

---

## Project Structure
```
app/
|-- components/
|   |-- MapComponent/ (Map-related UI components)
|   |-- ExportImportComponent.jsx (Handles data export/import)
|   |-- PolygonList.jsx (Displays list of polygons)
|   |-- UserPositionMarker.jsx (Geolocation marker logic)
|-- redux/
|   |-- mapCRUD/ (Polygon state management files)
|       |-- actions.js
|       |-- actionTypes.js
|       |-- reducer.js
|       |-- MapCRUDProvider.js
|   |-- rootReducer.js (Root reducer for Redux)
|   |-- store.js (Redux store setup)
|-- styles/ (SCSS files for app styling)
|   |-- _colors.scss (Color variables)
|   |-- style.scss (Global styles)
|-- layout.tsx (App layout)
|-- page.tsx (Main page)
```

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kayes360/spacenus-technical-challenge.git
   cd spacenus-technical-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage
1. Navigate to the map interface.
2. Draw a polygon by clicking on the map.
3. Customize the polygon’s fill and boundary colors using hex codes from the right side column.
4. Hover over the polygon marker to view its area.
5. Use the UI to edit or delete polygons.
6. Export polygon data as JSON or import an existing JSON file.

---

## Key Implementation Details
### State Management
- **Redux Toolkit** manages polygon data, ensuring efficient state updates for drawing, editing, and deleting polygons.

### Map Integration
- **React Leaflet** provides the interactive map functionalities.
- **react-leaflet-draw** provides Polygon drawing functionalities.
  
 
 

---

## License
This project is licensed under the MIT License.

