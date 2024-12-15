import Header from './Components/Header';
import Footer from './Components/Footer';
import ChefProfileCard from './Components/Chef-profile-card';
import Newsletter from './Components/NewsLetter';

const products = [
  {
    image: '/images/product1.jpg',
    name: 'Product 1',
    description: 'Description of product 1',
    price: '$10',
  },
  {
    image: '/images/product2.jpg',
    name: 'Product 2',
    description: 'Description of product 2',
    price: '$15',
  },
];

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Our Shop</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <ChefProfileCard/>
          ))}
        </div>
        <Newsletter />
      </main>
      
    </>
  );
};

export default Shop;
