import React from 'react'

const CheckoutPayment = () => {

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Formulario Enviado...')
}

return (
    <div className="bg-white p-4 rounded shadow grow">
      <h2 className="font-bold mb-2">💳 Pago</h2>
      <form className="space-y-2 mt-2">
        <input className="w-full border p-2 rounded" placeholder="Nombre de la tarjeta" />
        <input className="w-full border p-2 rounded" placeholder="Número de la tarjeta" />
        <div className="grid grid-cols-2 gap-2">
          <input className="border p-2 rounded" placeholder="Mes" />
          <input className="border p-2 rounded" placeholder="Año" />
        </div>
        <input className="w-full border p-2 rounded" placeholder="Número cuotas" />
        <div className="flex items-center gap-4 mt-2">
          <label className="flex items-center gap-1">
            <input type="radio" name="pago" /> Tarjeta Crédito
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="pago" /> Pago al recibir
          </label>
        </div>
        <button className="w-full mt-4 bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-600" onClick={handleSubmit}>
            Finalizar
        </button>
      </form>
    </div>
  );
};


export default CheckoutPayment