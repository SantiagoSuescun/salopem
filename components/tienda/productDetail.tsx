"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Facebook, Twitter, Instagram, MessageCircle, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cosmeticProducts } from "@/constants"
import { features } from "process"

interface ProductDetailProps {
  productId: number
  onBack: () => void
}

export default function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(3)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const product = cosmeticProducts.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Producto no encontrado</p>
      </div>
    )
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = cosmeticProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Product Images */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-8 pb-12  ">
              <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a la tienda
              </Button>
              <div className="flex justify-center items-center">

                <Image
                  src={`/images/webp/${product.images[selectedImageIndex]}`}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain p-8 "
                />
              </div>
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-lg">
                  -{product.discount}%
                </Badge>
              )}


              <div className="flex gap-2 items-center justify-center">
                {product.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors bg-gradient-to-br from-cyan-100 to-blue-100 ${selectedImageIndex === index ? "border-purple-500" : "border-gray-200"
                      }`}
                  >
                    <Image
                      src={`/images/webp/${image}`}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}

          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            {/* Product Title and Category */}
            <div>
              <p className="text-gray-600 text-sm mb-1">{product.category}</p>
              <h1 className="text-4xl font-bold text-purple-800 mb-4">{product.name}</h1>
              <p className="text-gray-700 leading-relaxed mb-4">{product.fullDescription}</p>
            </div>

            {/* Features Icons */}


            {/* Price */}

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold border-x">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-gray-600 hover:text-gray-800">
                  +
                </button>
              </div>

              <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold">
                🛒 Agregar
              </Button>
            </div>

            {/* Category and Share */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Categoría:</span>
                <span className="text-sm text-purple-600">{product.category}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Compartir:</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700">
                    <Instagram className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">


          <div className=" p-6">
            <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
          </div>


        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              PRODUCTOS RELACIONADOS
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-2"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-blue-50 border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center p-6">
                        <Image
                          src={`/images/webp/${relatedProduct.image}`}
                          alt={relatedProduct.name}
                          width={200}
                          height={200}
                          className="object-contain max-h-full"
                        />
                      </div>
                      {relatedProduct.discount && (
                        <Badge className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded">
                          -{relatedProduct.discount}%
                        </Badge>
                      )}
                    </div>

                    <div className="p-4 text-center">
                      <p className="text-xs text-gray-600 mb-1">{relatedProduct.category}</p>
                      <h3 className="font-bold text-purple-800 mb-2 text-sm">{relatedProduct.name}</h3>

                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg">
                        🛒 Agregar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
