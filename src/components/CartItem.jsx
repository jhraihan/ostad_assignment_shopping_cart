import "./CartItem.css";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>

        <div className="cart-item-controls">
          <div className="quantity-control">
            <button onClick={() => onDecrease(item.id)} aria-label="decrease quantity">
              −
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onIncrease(item.id)} aria-label="increase quantity">
              +
            </button>
          </div>

          <button className="remove-btn" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
