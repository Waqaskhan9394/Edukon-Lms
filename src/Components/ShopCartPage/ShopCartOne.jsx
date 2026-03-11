import React from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

// Image imports
import p1 from '../../assets/Image/shop1.jpg'; 
import p2 from '../../assets/Image/shop2.jpg';
import p3 from '../../assets/Image/shop3.jpg';
import p4 from '../../assets/Image/shop4.jpg';
import p5 from '../../assets/Image/shop5.jpg';

const ShoppingCart = () => {
  const cartData = [
    { id: 1, name: "Casual Cotton T-Shirt", price: "$250", qty: "1", total: "$250", img: p1 },
    { id: 2, name: "Summer Beach Wear", price: "$180", qty: "2", total: "$360", img: p2 },
    { id: 3, name: "Graphic Print Hoodie", price: "$450", qty: "1", total: "$450", img: p3 },
    { id: 4, name: "Slim Fit Denim Jeans", price: "$550", qty: "1", total: "$550", img: p4 },
    { id: 5, name: "Designer Wrist Watch", price: "$1200", qty: "1", total: "$1200", img: p5 },
  ];

  return (
    <div className="w-full bg-[#fdfdfd] py-10 px-4 font-['Roboto',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Table Container with Shadow and Border */}
        <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 rounded-sm overflow-hidden">
          
          {/* --- DESKTOP VIEW (Visible on md screens and up) --- */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ff6b2c] text-white uppercase text-[15px] font-bold">
                  <th className="py-5 px-6">Product</th>
                  <th className="py-5 px-6">Price</th>
                  <th className="py-5 px-6 text-center">Quantity</th>
                  <th className="py-5 px-6">Total</th>
                  <th className="py-5 px-6 text-center">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cartData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-50 rounded-md overflow-hidden flex-shrink-0 border border-gray-100">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-[#07294d] text-[17px]">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-[#777] font-medium text-[16px]">{item.price}</td>
                    <td className="py-6 px-6">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center border border-gray-200 rounded-sm bg-white">
                          <button className="p-2 text-gray-400 cursor-default"><FiMinus size={12} /></button>
                          <span className="w-10 text-center font-bold text-[#07294d] text-sm">{item.qty}</span>
                          <button className="p-2 text-gray-400 cursor-default"><FiPlus size={12} /></button>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-[#777] font-bold text-[16px]">{item.total}</td>
                    <td className="py-6 px-6 text-center">
                      <button className="text-[#ff6b2c] p-2 hover:bg-orange-50 rounded-full transition-all">
                        <FiTrash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- MOBILE VIEW (Visible on small screens only) --- */}
          <div className="md:hidden divide-y divide-gray-100">
            {cartData.map((item) => (
              <div key={item.id} className="p-4 flex flex-col gap-4">
                {/* Product Info Row */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden border border-gray-100 flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#07294d] text-[16px] leading-tight">{item.name}</h4>
                    <p className="text-[#ff6b2c] font-bold mt-1">{item.price}</p>
                  </div>
                  <button className="text-[#ff6b2c] self-start p-1">
                    <FiTrash2 size={20} />
                  </button>
                </div>

                {/* Controls Row */}
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-sm">
                  <div className="flex items-center border border-gray-200 bg-white rounded-sm">
                    <button className="p-2 text-gray-400"><FiMinus size={12} /></button>
                    <span className="w-10 text-center font-bold text-[#07294d]">{item.qty}</span>
                    <button className="p-2 text-gray-400"><FiPlus size={12} /></button>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-gray-400 uppercase font-bold tracking-tighter">Subtotal</p>
                    <p className="text-[#777] font-bold">{item.total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;