import React from 'react'

const CheckoutAddress = () => {
return (    
    <div className="bg-white p-4 rounded shadow grow">
      <h2 className="font-bold mb-2">🚚 Envío</h2>
      <div className="grid gap-4">
        <select className="border p-2 rounded">
          <option disabled>País</option>
          <option value="1">Colombia</option>
          <option value="2">España</option>
        </select>
        <input className="border p-2 rounded" placeholder="Departamento / Región" />
        <input className="border p-2 rounded" placeholder="Ciudad / Municipio" />
        <input className="border p-2 rounded" placeholder="Dirección envío" />
        <input className="border p-2 rounded" placeholder="Código postal" />
      </div>
    </div>
  );
};


export default CheckoutAddress