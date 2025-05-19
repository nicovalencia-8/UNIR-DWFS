import React from 'react'

const CheckoutIdentity = () => {
return (
    <section className="bg-white p-4 rounded shadow w-full md:w-[300px]">
      <h2 className="font-bold mb-2">🆔 Identificación</h2>
      <form className="space-y-2">
        <input className="w-full border p-2 rounded" placeholder="Correo" />
        <input className="w-full border p-2 rounded" placeholder="Nombre" />
        <input className="w-full border p-2 rounded" placeholder="Apellido" />
        <select className="w-full border p-2 rounded">
          <option disabled>Tipo Documento</option>
          <option value="1">CC</option>
          <option value="1">CE</option>
          <option value="2">Pasaporte</option>
        </select>
        <input className="w-full border p-2 rounded" placeholder="Número Documento" />
      </form>
    </section>
  );
};


export default CheckoutIdentity