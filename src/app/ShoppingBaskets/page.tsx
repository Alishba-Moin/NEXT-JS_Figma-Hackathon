import Header from "@/components/Header/page";
import { Button } from "@/components/ui/button";

export default function ShoppingBasket() {
    return (
        <div className="w-full max-w-[1440px] h-auto bg-gray-50 flex flex-col p-8">
            <Header />
            {/* Cart Header */}
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Your shopping cart</h1>

            {/* Product Section */}
            <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-200 pb-4">
                    <span className="text-lg font-semibold text-gray-900">Product</span>
                    <span className="text-lg font-semibold text-gray-900 text-center">Quantity</span>
                    <span className="text-lg font-semibold text-gray-900 text-right">Total</span>
                </div>

                {/* Product 1 */}
                <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-200 py-6">
                    {/* Product Image and Details */}
                    <div className="flex items-start space-x-4">
                        <div className="w-[120px] h-[120px] bg-cover bg-center" style={{ backgroundImage: "url('/product1.png')" }}></div>
                        <div className="flex flex-col">
                            <span className="text-lg font-medium text-gray-900">Graystone vase</span>
                            <span className="text-sm text-gray-500">A timeless ceramic vase with a tri color grey glaze.</span>
                            <span className="text-sm font-medium text-gray-900 mt-2">£85</span>
                        </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-center space-x-4">
                        <Button className="w-8 h-8  text-gray-700 flex items-center justify-center">-</Button>
                        <span className="text-lg font-medium">1</span>
                        <Button className="w-8 h-8 bg-gray-200 text-gray-700 flex items-center justify-center">+</Button>
                    </div>

                    {/* Total Price */}
                    <span className="text-lg font-medium text-gray-900 text-right">£85</span>
                </div>

                {/* Product 2 */}
                <div className="grid grid-cols-3 gap-4 items-center border-b border-gray-200 py-6">
                    {/* Product Image and Details */}
                    <div className="flex items-start space-x-4">
                        <div className="w-[120px] h-[120px] bg-cover bg-center" style={{ backgroundImage: "url('/product2.png')" }}></div>
                        <div className="flex flex-col">
                            <span className="text-lg font-medium text-gray-900">Basic white vase</span>
                            <span className="text-sm text-gray-500">Beautiful and simple this is one for the classics.</span>
                            <span className="text-sm font-medium text-gray-900 mt-2">£125</span>
                        </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center justify-center space-x-4">
                        <Button className="w-8 h-8 text-gray-700 flex items-center justify-center">-</Button>
                        <span className="text-lg font-medium">1</span>
                        <Button className="w-8 h-8 text-gray-700  flex items-center justify-center">+</Button>
                    </div>

                    {/* Total Price */}
                    <span className="text-lg font-medium text-gray-900 text-right">£125</span>
                </div>

                {/* Total Section */}
                <div className="flex justify-end items-center mt-8 gap-6">
                    <span className="text-lg font-medium text-gray-900">Subtotal</span>
                    <span className="text-lg font-medium text-gray-900">£210</span>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <span className="text-sm text-gray-600">Taxes and shipping are calculated at checkout</span>
                </div>

                {/* Checkout Button */}
                <div className="flex justify-between mt-8">
                    <Button className="bg-gray-950 text-white px-6 py-3 rounded-md hover:bg-gray-800">Go to checkout</Button>
                </div>
            </div>
        </div>
    );
}
