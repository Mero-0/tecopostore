import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      clearCart();
      setOrderCompleted(true);
    }, 1500);
  };

  if (orderCompleted) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">¡Compra exitosa!</h2>
          <p>Recibirás un correo con los detalles de tu pedido.</p>
        </div>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Resumen del pedido</h2>
        </div>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => {}}
            onUpdateQuantity={() => {}}
          />
        ))}
        <div className="p-4 border-t flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Información de envío</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <textarea
              required
              rows={3}
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;