import React from 'react';

/**
 * This component should receive an `items` prop that is an array of all available items. It should
 * also have the event handler functions from its parent Supermarket component passed in, so the
 * Catalogue component can notify the Supermarket component when an item has been added or removed.
 */

export default class Catalogue extends React.Component {
  render() {
    return (
      <div>
        <h2>Available items</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price/unit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    );
  }
}

Catalogue.propTypes = {
  items: React.PropTypes.array.isRequired,
  onAddItem: React.PropTypes.func.isRequired,
  onRemoveItem: React.PropTypes.func.isRequired,
};
