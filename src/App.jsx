import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ToggleVisible from './components/ToggleVisible';

function App() {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: 600,
      onSale: true,
      image:
        'https://images.samsung.com/is/image/samsung/assets/it/s2602/pcd/smartphones/PF_Main-Category_Galaxy-Smartphone_176x176.png?$ORIGIN_PNG$',
      description:
        'Incredibile Smartphone dalle foto sensazionali con prestazioni uniche nel suo genere e batteria Litium incredibile',
    },
    {
      id: 2,
      name: 'Pc Gaming',
      price: 950,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/71vqBRAbofL.jpg',
      description:
        'Incredibile PC GAMING dalle incredibili performance, raccoglie tutto il mondo del gaming ad alte prestazioni',
    },
    {
      id: 3,
      name: 'TV',
      price: 450,
      onSale: true,
      image:
        'https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_UH_12_Beauty_I_M?$productIntroPlatemobile$&fmt=png-alpha',
      description:
        'Incredibile TV dalle incredibili dimensioni, raccoglie tutti i pixel in un unica alta definizione',
    },
  ];

  //Serie di carte, mapparli a schermo con immagine, prezzo, titolo, in saldo

  return (
    <>
      <Header />

      <div className="my-5">
        <div className="container">
          <div className="row">
            <Counter />

            <ToggleVisible />

            {products.map((product) => (
              <ProductCard key={product.id} product={product}>
                {product.id === 1 && (
                  <div>
                    <h4>Recensioni</h4>
                    <p>125 Recensioni</p>
                  </div>
                )}

                {product.id === 2 && (
                  <div>
                    <h4>Recensioni</h4>
                    <p>10 Recensioni</p>
                  </div>
                )}

                {product.id === 3 && (
                  <div>
                    <h4>Recensioni</h4>
                    <p>40 Recensioni</p>
                  </div>
                )}
              </ProductCard>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
