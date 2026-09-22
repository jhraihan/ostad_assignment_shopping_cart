import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ isOpen, onClose, items, subtotal, onIncrease, onDecrease, onRemove }) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <button className="cart-close-btn" onClick={onClose} aria-label="close cart">
            ✕
          </button>
        </div>

        <h2 className="cart-subtotal-title">Sub Total</h2>
        <p className="cart-subtotal-amount">${subtotal.toFixed(2)}</p>

        {items.length === 0 ? (
          <>
            <button className="go-to-cart-btn" disabled>
              Go to Cart →
            </button>
            <div className="cart-empty">
              <span className="cart-empty-icon">🛍️🛒</span>
              <p>Your Cart is Empty</p>
            </div>
          </>
        ) : (
          <>
            <button className="go-to-cart-btn">Go to Cart →</button>
            <div className="cart-items-list">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
