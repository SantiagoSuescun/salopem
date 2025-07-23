"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, XCircle, Plus, Minus } from "lucide-react"

interface CartSheetProps {
    isOpen: boolean
    onClose: () => void
}

export default function CartSheet({ isOpen, onClose }: CartSheetProps) {
    const { products, getTotal, getCount, updateQuantity, removeProduct } = useCartStore()
    const totalItems = getCount()
    const totalPrice = getTotal()

    const handleQuantityChange = (productId: number, change: number) => {
        const product = products.find(p => p.id === productId)
        if (product) {
            const newQuantity = product.quantity + change
            updateQuantity(productId, newQuantity)
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingCart className="w-3 h-4" /> Tu Carrito ({totalItems})
                    </SheetTitle>
                    <SheetDescription>Revisa los productos en tu carrito antes de proceder al pago.</SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4">
                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <ShoppingCart className="w-16 h-16 mb-4" />
                            <p className="text-lg">Tu carrito está vacío.</p>
                            <Button onClick={onClose} className="mt-4 bg-purple-600 hover:bg-purple-700">
                                Continuar Comprando
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {products.map((product) => (
                                <div key={product.id} className="flex items-center gap-4 p-3 border  bg-gray-50">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-contain rounded-md"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">{product.name}</h3>
                                        <p className="font-bold text-purple-700 text-sm">{product.price}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="px-2 py-1 h-8 w-8 rounded-none hover:bg-gray-100"
                                                onClick={() => handleQuantityChange(product.id, -1)}
                                                disabled={product.quantity <= 1}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </Button>
                                            <span className="px-3 py-1 text-sm font-medium border-x border-gray-300 min-w-[2rem] text-center">
                                                {product.quantity}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="px-2 py-1 h-8 w-8 rounded-none hover:bg-gray-100"
                                                onClick={() => handleQuantityChange(product.id, 1)}
                                            >
                                                <Plus className="w-3 h-3" />
                                            </Button>
                                        </div>
                                        {/* Remove Button */}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-1 h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                                            onClick={() => removeProduct(product.id)}
                                        >
                                            <XCircle className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {products.length > 0 && (
                    <>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center font-bold text-lg px-4">
                            <span>Total:</span>
                            <span>COP {totalPrice.toLocaleString("es-CO")}</span>
                        </div>
                    </>
                )}
                <SheetFooter className="mt-2 flex flex-col sm:flex-col gap-2">
                    <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={products.length === 0}
                        onClick={() => {
                            if (products.length > 0) {
                                onClose()
                                window.location.href = "/checkout"
                            }
                        }}
                    >
                        Pagar
                    </Button>
                    <Button variant="outline" onClick={onClose} className="w-full bg-transparent">
                        Continuar Comprando
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
