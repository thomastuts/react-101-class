import React from 'react';

import Catalogue from './Catalogue';
import ShoppingCart from './ShoppingCart';

/**
 * This is the Supermarket exercise.
 *
 * Briefing
 * ----
 * This Supermarket component is responsible for holding all of the state of the 'app'. It owns two
 * components: the Catalogue and the ShoppingCart components. The Catalogue component is responsible
 * for displaying all of the items and their prices. The ShoppingCart component is responsible for
 * showing the items the user has purchased, along with the total amount due. The items that the
 * store has in stock are available in the Supermarket component as `this.props.catalogue`.
 *
 * Users can add and remove items from inside the Catalogue component using a simple + and - system.
 * The ShoppingCart component does not have to contain this functionality, but if you want to add it
 * there too, feel free!
 *
 * Hints
 * ----
 * Since a user can change what is in their shopping cart, you will need to define the items added
 * to the cart as state. Since the Supermarket component is responsible for managing your state, you
 * will have to pass along some event handlers to the Catalogue component to add/remove items from
 * the cart.
 *
 * Be sure to have a data structure in your state that is an array of the items added to the cart.
 * You can track the amount of items using an `amount` property in every item that is present in
 * the shopping cart. Be sure to not have any duplicates in it!
 *
 * Make use of the Array.find(), Array.filter() and other Array methods to manage the items in your
 * cart.
 */

export default class Supermarket extends React.Component {
  render() {
    return (
      <div>
        <h1>React Supermarket</h1>
        <Catalogue />
        <ShoppingCart />
      </div>
    );
  }
}

Supermarket.propTypes = {
  catalogue: React.PropTypes.array.isRequired,
};
