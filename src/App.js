import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import { generatePalette } from './lib/colorHelper';


import seedColors from './seedColors';

function App() {
  const findPalette = (id) => (seedColors.filter(palette => palette.id === id)[0]);
  
  const toPalette = (routeProps) => {
    const palette = findPalette(routeProps.match.params.id);
    if (palette)
      return <Palette {...generatePalette(palette)} />
    else
      return <h1>Not found</h1>
  }
  
  const toSingleColorPalette = (routeProps) => {
    const palette = findPalette(routeProps.match.params.paletteId);
    if (palette)
      return <SingleColorPalette colorId={routeProps.match.params.colorId} {...generatePalette(palette)} />
    else
      return <h1>Not found</h1>
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' render={routeProps => <PaletteList {...routeProps} palettes={seedColors} />} />
        <Route exact path='/palette/:id' render={toPalette} />
        <Route exact path='/palette/:paletteId/:colorId' render={toSingleColorPalette} />
      </Switch>
    </div>
  );
}

export default App;
