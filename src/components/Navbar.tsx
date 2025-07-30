import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src="/icon.png" alt="Tecopos Logo" className="h-10 w-10 rounded-full" />
          <span>TecoShop</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;