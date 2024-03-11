import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
const ShoppingCartTable = ({ items, total, onIncrease, onDecrese, onDelete }) => {
  const renderRow = (item, idx) => {
      const { id, name, count, total } = item;
      return (
        <tr>
    <td>{idx}</td>
    <td>{name}</td>
    <td>{count}</td>
    <td>${total}</td>
    <td>
      <button 
      onClick={() => onDecrese(id)}
      className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>

      <button
      onClick={() => onIncrease(id)}
      className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-plus-circle" />
      </button>

      <button
      onClick={() => onDelete(id)}
      className="btn btn-outline-warning btn-sm float-right">
        <i className="fa fa-minus-circle" />
      </button>
    </td>
  </tr>
      );
  }
  
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increased as ${id}`);
    },
    onDecrese: (id) => {
      console.log(`Decreased as ${id}`);
    },
    onDelete: (id) => {
      console.log(`Deleted as ${id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
