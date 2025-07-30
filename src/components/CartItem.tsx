import type { CartItem as CartItemType } from '../types/product';

interface Props {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: Props) => {
  return (
    <div className="p-4 flex items-start gap-4 border-b">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
      <div className="flex-grow">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <span>Cantidad:</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, +e.target.value)}
            className="w-16 p-1 border rounded"
          />
          <span className="ml-4 font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;