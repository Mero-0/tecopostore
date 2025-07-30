import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/product';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain p-4"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;