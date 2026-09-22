import "./Header.css";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-text">amazon</span>
      </div>

      <div className="header-delivery">
        <span className="delivery-icon">📍</span>
        <div className="delivery-text">
          <span className="delivery-label">Deliver to</span>
          <span className="delivery-location">Bangladesh</span>
        </div>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search Amazon" />
        <button aria-label="search">🔍</button>
      </div>

      <div className="header-account">
        <span className="account-greeting">Hello, sign in</span>
        <span className="account-label">Account &amp; Lists</span>
      </div>

      <div className="header-orders">
        <span className="account-greeting">Returns</span>
        <span className="account-label">&amp; Orders</span>
      </div>

      <button className="header-cart" onClick={onCartClick}>
        <span className="cart-badge">{cartCount}</span>
        <span className="cart-icon">🛒</span>
        <span className="cart-label">cart</span>
      </button>
    </header>
  );
}

export default Header;
