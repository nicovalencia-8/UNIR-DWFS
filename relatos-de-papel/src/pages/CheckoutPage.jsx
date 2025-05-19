import CheckoutIdentity from "../components/Checkout/CheckoutIdentity"
import CheckoutAddress from "../components/Checkout/CheckoutAddress"
import CheckoutPayment from "../components/Checkout/CheckoutPayment"
import CheckoutItems from "../components/Checkout/CheckoutItems"

const CheckoutPage = () => {
  return (
    <div className="p-8 space-y-6 bg-gray-50 h-130">
      <h1 className="text-2xl font-bold">Finalizar Compra</h1>
      <div className="flex flex-wrap gap-6">
        <CheckoutIdentity/>
        <CheckoutAddress/>
        <CheckoutPayment/>
        <CheckoutItems/>
      </div>
    </div>
  )
}

export default CheckoutPage