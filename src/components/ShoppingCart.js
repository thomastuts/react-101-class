import React from 'react';

/**
 * This component should receive an `itemsInCart` prop that is an array of all items in the shopping
 * cart. It should show these items, along with a total cost (hint: you can use Array.reduce() for
 * calculating the total cost).
 */

export default class ShoppingCart extends React.Component {
  render() {
    const itemsInCart = this.props.itemsInCart.map(item => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>${item.price}</td>
        <td>${(item.amount * item.price).toFixed(2)}</td>
      </tr>
    ));

    const totalAmount = this.props.itemsInCart.reduce((total, item) => {
      return total + (item.amount * item.price);
    }, 0).toFixed(2);

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
          {itemsInCart}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={{textAlign: 'right'}}>
                <strong>Total: ${totalAmount}</strong>
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
