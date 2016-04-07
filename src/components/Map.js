import React from 'react';

/**
 * This is the Map exercise.
 *
 * Briefing
 * ----
 * This component takes an `initialPosition` prop that is an object that contains latitude and longitude
 * coordinates. For the initial position, center the map on the Eiffel Tower (48.858608, 2.294471).
 * Add a button that, when clicked, pans the map to the Arc De Triomphe (48.873947, 2.295038). Use a
 * ref to access the DOM node which you can pass to the Google Maps API so that it renders into that
 * element.
 *
 * Hints
 * ----
 * Check out the basic example on https://developers.google.com/maps/documentation/javascript/tutorial#The_Hello_World_of_Google_Maps_v3
 * to see how a basic map is instantiated. Don't worry about loading in the Google Maps library using
 * a script tag, that's already been done for you in our index.html file. Remember the lifecycle
 * methods we talked about in lesson 2, and use the right one here to instantiate the map.
 *
 * For the panning, use the `panTo()` method on the map instance. This means you'll need to save a
 * reference to the map that you create.
 */

export default class Map extends React.Component {
  render() {
    return (
      <div>
        <h1>Map</h1>
        <button>Go to Arc De Triomphe</button>
        <div style={{width: 500, height: 500, border: '1px solid black'}}>
          I should be a map!
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  initialPosition: React.PropTypes.object.isRequired
};
