import React from 'react';

/**
 * This component should receive an `itemsInCart` prop that is an array of all items in the shopping
 * cart. It should show these items, along with a total cost (hint: you can use Array.reduce() for
 * calculating the total cost).
 */

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h2>Items in your cart</h2>
        <table>
          <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Price/unit</th>
            <th>Total price for unit</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={{textAlign: 'right'}}>
                <strong>Total: $0</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  itemsInCart: React.PropTypes.array.isRequired,
};
