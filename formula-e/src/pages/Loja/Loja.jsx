import { useEffect, useState } from 'react';
import './Loja.css';
import sliderimg1 from '../../assets/sliderimg1.png';
import sliderimg2 from '../../assets/sliderimg2.png';
import sliderimg3 from '../../assets/sliderimg3.png';
import poloporsche from '../../assets/produtosloja/poloporsche.png';
import polomclaren from '../../assets/produtosloja/polomclaren.png';
import teijinshirt from '../../assets/produtosloja/teijinshirt.png';
import bonemahindra from '../../assets/produtosloja/bonemahindra.jpg';
import boneandretti from '../../assets/produtosloja/boneandretti.png';
import bonejaguar from '../../assets/produtosloja/bonejaguar.png';
import boneporsche from '../../assets/produtosloja/boneporsche.png';
import nissanshirt from '../../assets/produtosloja/nissanshirt.png';
import bonemclaren from '../../assets/produtosloja/bonemclaren.png';
import maseratishirt from '../../assets/produtosloja/maseratishirt.png';
import maseraticap from '../../assets/produtosloja/maseraticap.png';
import jaguarshirt from '../../assets/produtosloja/jaguarshirt.png';
import envisioncap from '../../assets/produtosloja/envisioncap.png';
import niopolo from '../../assets/produtosloja/niopolo.png';
import penskeshirt from '../../assets/produtosloja/penskeshirt.png';
import penskecap from '../../assets/produtosloja/penskecap.png';
import niojaqueta from '../../assets/produtosloja/niojaqueta.png';

// Dados do carrossel
const sliderImages = [
  { id: 1, src: sliderimg1, alt: 'Imagem indicando cupom Mahindra10' },
  { id: 2, src: sliderimg2, alt: 'Imagem com produtos da Mahindra' },
  { id: 3, src: sliderimg3, alt: 'Imagem com produtos da Fórmula E' }
];

const initialProducts = [
  { id: 1, name: 'Porsche Motorsport Polo', price: 150, category: 'Polo', image: poloporsche },
  { id: 2, name: 'Neom McLaren Polo', price: 150, category: 'Polo', image: polomclaren },
  { id: 3, name: 'Envision Racing T-Shirt', price: 150, category: 'Camiseta', image: teijinshirt },
  { id: 4, name: 'Mahindra Racing Cap', price: 100, category: 'Boné', image: bonemahindra },
  { id: 5, name: 'Andretti Racing Cap', price: 100, category: 'Boné', image: boneandretti },
  { id: 6, name: 'Jaguar TCS Racing Cap', price: 100, category: 'Boné', image: bonejaguar },
  { id: 7, name: 'Porsche Motorsport Cap', price: 100, category: 'Boné', image: boneporsche },
  { id: 8, name: 'Nissan', price: 150, category: 'Camiseta', image: nissanshirt },
  { id: 9, name: 'Neom McLaren Cap', price: 100, category: 'Boné', image: bonemclaren },
  { id: 10, name: 'Maserati Formula T-Shirt', price: 150, category: 'Camiseta', image: maseratishirt },
  { id: 11, name: 'Maserati Formula Cap', price: 100, category: 'Boné', image: maseraticap },
  { id: 12, name: 'Jaguar TCS Racing T-Shirt', price: 150, category: 'Camiseta', image: jaguarshirt },
  { id: 13, name: 'Envision Racing Cap', price: 100, category: 'Boné', image: envisioncap },
  { id: 14, name: 'NIO 333 Polo', price: 150, category: 'Polo', image: niopolo },
  { id: 15, name: 'DS Penske T-Shirt', price: 150, category: 'Camiseta', image: penskeshirt },
  { id: 16, name: 'DS Penske Bone', price: 100, category: 'Boné', image: penskecap },
  { id: 17, name: 'NIO 333 Jaqueta', price: 150, category: 'Camiseta', image: niojaqueta }
];


function Loja() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [validCoupon] = useState('mahindra10');
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [count, setCount] = useState(0);
  const totalSlides = sliderImages.length;

  // Sistema de filtro de produtos
  const filterProducts = (category) => {
    setCategoryFilter(category);
    if (category === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  // Aplicar desconto de 20% em todos os produtos
  const applyDiscount = (price) => {
    const couponInput = document.getElementById('coupon').value;
    if (couponInput === validCoupon) {
      return price * 0.80; 
    } else {
      alert('Cupom inválido!');
      return price;
    }
  };

  // Sistema de carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % totalSlides); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [totalSlides]);

  // Função para mudar o slide manualmente
  const handleManualChange = (index) => {
    setCount(index); 
  };
  
  return (
    <div className="store">
      <h1>Loja de Produtos de Fórmula E</h1>

      {/* Sistema de Filtros */}
      <div className="filters">
        <button onClick={() => filterProducts('Todos')}>Todos</button>
        <button onClick={() => filterProducts('Polo')}>Polos</button>
        <button onClick={() => filterProducts('Camiseta')}>Camisetas</button>
        <button onClick={() => filterProducts('Boné')}>Bonés</button>
      </div>

      {/* Carrossel de Imagens */}
      <div className="slider">
        <div className="slider-bg">
          <div className="slides" style={{ transform: `translateX(${-count * 100}%)` }}>
            {sliderImages.map((image) => (
              <div key={image.id} className="slided">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          <div className="manual-nav">
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`manual-btn ${count === index ? 'active' : ''}`} 
                onClick={() => handleManualChange(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Exibição de Produtos */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R$ {discountedPrice && discountedPrice.id === product.id ? discountedPrice.price : product.price}</p>
            <button onClick={() => setDiscountedPrice({ id: product.id, price: applyDiscount(product.price) })}>Aplicar Desconto</button>
            <button onClick={() => alert(`${product.name} adicionado ao carrinho!`)}>Comprar</button>
          </div>
        ))}
      </div>

      {/* Campo para Cupom de Desconto */}
      <div className="discount-section">
        <input type="text" id="coupon" placeholder="Insira seu cupom" />
      </div>
    </div>
  );
}

export default Loja;
