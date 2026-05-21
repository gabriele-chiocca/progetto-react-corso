function ProductCard({ product }) {
  return (
    <div className="col-4">
      <div className="card rounded p-3 w-100 h-100" style={{ width: '18rem' }}>
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title h2">{product.name}</h5>
          <p className=" mt-3 card-text flex-grow-1">{product.description}</p>

          <h6 className="h3 mb-3">{product.price}$</h6>

          <a href="#" className="btn btn-primary">
            Acquista
          </a>
          {product.onSale && (
            <span className=" mt-3 p-2 badge bg-danger w-75 center">
              In saldo!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
