import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
// import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
                <div>
                    <a href="/" className="brand">TopStore</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/login">login</a>
                </div>
            </header>
      {/* <Header /> */}
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={ProductPage} />
      </main>
      <Footer />
  </div>
    </BrowserRouter>
  );
}

export default App;
