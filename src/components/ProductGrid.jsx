import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid-section">
      <h1 className="results-title">Results</h1>
      <p className="results-subtitle">Check each product page for other buying options.</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
