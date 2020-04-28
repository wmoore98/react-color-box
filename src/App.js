import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NewPaletteForm from './components/NewPaletteForm';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import Page from './components/Page';

import { generatePalette } from './lib/colorHelper';

import seedColors from './seedColors';

function App() {

  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors);

  const findPalette = (id) => (palettes.filter(palette => palette.id === id)[0]);
  
  const toPalette = (routeProps) => {
    const palette = findPalette(routeProps.match.params.id);
    if (palette)
      return <Page><Palette {...generatePalette(palette)} /></Page>
    else
      return <Page><h1>Not found</h1></Page>
  }

  const savePalette = (newPalette) => {
    const updatedPalettes = [...palettes, newPalette];
    setPalettes(updatedPalettes);
    syncLocalStorage(updatedPalettes);
  }

  const deletePalette = (id) => {
    const updatedPalettes = palettes.filter(palette => palette.id !== id);
    setPalettes(updatedPalettes);
    syncLocalStorage(updatedPalettes);
  }

  const syncLocalStorage = (palettes) => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }
  
  const toSingleColorPalette = (routeProps) => {
    const palette = findPalette(routeProps.match.params.paletteId);
    if (palette)
      return <Page><SingleColorPalette colorId={routeProps.match.params.colorId} {...generatePalette(palette)} /></Page>
    else
      return <Page><h1>Not found</h1></Page>
  }

  return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='page' timeout={500}>
          <Switch location={location}>
            <Route exact path='/palette/new' render={routeProps => <div className='page'><NewPaletteForm {...routeProps} savePalette={savePalette} palettes={palettes} /></div>} />
            <Route exact path='/' render={routeProps => <div className='page'><PaletteList {...routeProps} palettes={palettes} onClickDelete={deletePalette} /></div>} />
            <Route exact path='/palette/:id' render={toPalette} />
            <Route exact path='/palette/:paletteId/:colorId' render={toSingleColorPalette} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}>
    </Route>
  );
}

export default App;
