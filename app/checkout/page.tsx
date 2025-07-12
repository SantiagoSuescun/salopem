"use client"

import type React from "react"

import { useCartStore } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { ShoppingBag, Truck, CreditCard, User, Mail, Phone, MapPin, Home } from "lucide-react"

export default function CheckoutPage() {
  const { products, getTotal } = useCartStore()
  const router = useRouter()
  const totalPrice = getTotal()
  const [isHydrated, setIsHydrated] = useState(false)

  // Check if store is hydrated
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Redirect to store if cart is empty (only after hydration)
  useEffect(() => {
    if (isHydrated && products.length === 0) {
      router.push("/tienda")
      return
    }
  }, [isHydrated, products.length, router])

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    department: "",
    zipCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order data to your backend
    // For now, we'll just log it and show a toast.
    console.log("Datos del pedido:", { products, formData, totalPrice })

    toast("Tus datos han sido recibidos. Redirigiendo a Wompi...")

    // Simulate Wompi redirection
    setTimeout(() => {
      // Replace with actual Wompi redirection logic
      // For example: window.location.href = "https://checkout.wompi.co/..."
      alert("Redirigiendo a Wompi para el pago...")
      router.push("/") // Redirect to home or a confirmation page after "payment"
    }, 2000)
  }

  // Show loading while hydrating
  if (!isHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">Preparando tu pedido...</p>
        </div>
      </div>
    )
  }

  // Don't render anything if cart is empty (will redirect)
  if (products.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">


        <div className="grid lg:grid-cols-3 gap-8 mt-5" >
          {/* Resumen del Carrito */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl p-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-t-lg py-3">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6" />
                  <CardTitle className="text-xl">Resumen de tu Pedido</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">Cantidad: {product.quantity}</p>
                      </div>
                      <span className="font-bold text-purple-700 text-lg">{product.price}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="bg-gradient-to-r from-purple-50 to-cyan-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Total a Pagar:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      COP {totalPrice.toLocaleString("es-CO")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Datos de Envío */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl p-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-t-lg py-2">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6" />
                  <CardTitle className="text-xl">Datos de Envío</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Información Personal */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Información Personal</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nombre Completo
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="Ingresa tu nombre completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  {/* Dirección de Envío */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-cyan-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Dirección de Envío</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Dirección Completa
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Calle, número, apartamento, barrio"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium text-gray-700">Ciudad</Label>
                        <Input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="Bogotá"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-sm font-medium text-gray-700">Departamento</Label>
                        <Input
                          id="department"
                          type="text"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="Cundinamarca"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700">Código Postal</Label>
                        <Input
                          id="zipCode"
                          type="text"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="110111 (Opcional)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Botón de Pago */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Proceder al Pago
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Tus datos están protegidos y serás redirigido a Wompi para el pago seguro
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
