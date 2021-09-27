import data from './data'

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">Eishop</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/login">login</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.Products.map((product => (
            <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
              <img src={product.image} className="medium" alt={product.name} />
            </a>
            <div className="card-body">
              <a href ={`/product/${product._id}`} className="product-body"></a> 
              <h2>{product.name}</h2>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <div className="price">#{product.price}</div>
              </div>
            </div>
          </div>
          )))}
        </div>
      </main>
      <footer className="row center">Copyright All right reserved</footer>
  </div>
  );
}

export default App;
