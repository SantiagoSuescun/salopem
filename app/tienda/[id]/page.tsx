"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cosmeticProducts } from "@/constants"
import { useParams, useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import EspadaLaserBarra from "@/components/landing/Espada"
import toast from "react-hot-toast"

export default function ProductDetail() {
  const params = useParams()
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const addProduct = useCartStore((state) => state.addProduct)
  const openCart = useCartStore((state) => state.openCart)

  // 1. Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState<"descripcion" | "info">("descripcion");

  const productId = Number(params.id)
  const product = cosmeticProducts.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Producto no encontrado</p>
      </div>
    )
  }

  const relatedProducts = cosmeticProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    // Agregar el producto al carrito con la cantidad seleccionada
    for (let i = 0; i < quantity; i++) {
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: `/images/webp/${product.images[0]}`,
      })
      openCart(); // <-- abre el modal
      toast.success("Producto agregado al carrito")
    }

  }

  const handleAddRelatedToCart = (relatedProduct: any) => {
    addProduct({
      id: relatedProduct.id,
      name: relatedProduct.name,
      price: relatedProduct.price,
      image: `/images/webp/${relatedProduct.images[0]}`,
    })
    openCart(); // <-- abre el modal
    toast.success("Producto agregado al carrito")
  }



return (
  <div className=" bg-gray-50">

    <div className="container mx-auto px-4">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 text-gray-600 hover:text-purple-700 transition-colors mt-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a la tienda
      </Button>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 p-6 md:p-10">
        {/* Left Side - Product Images */}
        <div className="space-y-6 flex gap-4">
          {/* Main Product Image */}
          <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg   flex justify-center items-center overflow-hidden">
            <Image
              key={selectedImageIndex} // Key to trigger re-render and animation
              src={`/images/webp/${product.images[selectedImageIndex]}`}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain p-4 md:p-8 transition-opacity duration-300 ease-in-out opacity-100 animate-fade-in"
            />
            {product.discount && (
              <Badge className="absolute top-4 left-4 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                -{product.discount}%
              </Badge>
            )}
          </div>
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-3 items-center justify-center flex-wrap">
            {product.images.slice(0, 4).map((image, index) => (
              <Button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ease-in-out bg-gradient-to-br from-cyan-100 to-blue-100 p-1
                  ${selectedImageIndex === index
                    ? "border-purple-500 shadow-md scale-105"
                    : "border-gray-200 hover:border-purple-300"
                  }`}
              >
                <Image
                  src={`/images/webp/${image}`}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-contain p-2"
                />
                <span className="sr-only">Ver imagen {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-8">
          {/* Product Title and Category */}
          <div>
            <p className="text-purple-700 text-sm font-medium mb-2">
              {Array.isArray(product.category)
                ? product.category.join(" / ")
                : product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4 leading-tight">
              {product.name}
            </h1>
            {/* Removed fullDescription from here */}
          </div>
          {/* Product Details (Weight) */}
          <div className="text-gray-700 text-base mb-4">
            <p className="mt-2 leading-relaxed">{product.fullDescription}</p>{" "}
            {/* Full description moved here */}
            <p>
              <span className="font-semibold">Peso:</span> {product.peso}
            </p>
            {/* Features Icons */}
            <div className="flex gap-8 md:gap-12 my-6 justify-center md:justify-start flex-wrap">
              {product.features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <feature.icon className="w-7 h-7 text-purple-700" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium max-w-[80px]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
            {/* Price */}
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {product.price}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 ">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                -
              </button>
              <span className="px-4 py-2 font-semibold text-gray-800 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <Button
              className="flex-1 py-4 flex justify-center items-center bg-cyan-500 hover:bg-cyan-600 text-white  rounded-lg font-semibold text-lg shadow-md transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" /> Agregar al Carrito
            </Button>
          </div>

          {/* Category at bottom */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">
                Categoría:
              </span>
              <span className="text-sm text-purple-600 font-medium">
                {Array.isArray(product.category)
                  ? product.category.join(" / ")
                  : product.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs, outside the grid, occupying full width */}
      <div className="my-8">
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "descripcion"
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-700"
              }`}
            onClick={() => setActiveTab("descripcion")}
          >
            Descripción
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "info"
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-700"
              }`}
            onClick={() => setActiveTab("info")}
          >
            Información adicional
          </button>
        </div>
        {activeTab === "descripcion" && (
          <p className="mt-2 leading-relaxed">{product.fullDescription}</p>
        )}
        {activeTab === "info" && (
          <div className="mt-2 leading-relaxed">
            <p>
              <strong>Peso:</strong> {product.peso}
            </p>
            <p>
              <strong>Marca:</strong> {product.brand}
            </p>
            {/* Más campos si quieres */}
          </div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="my-8">
          <EspadaLaserBarra text="Productos relacionados" id="Ciudado" />

          <div className="flex flex-wrap justify-center gap-3 ">
            {relatedProducts.map((relatedProduct) => {
              const discount =
                typeof relatedProduct.discount === "number"
                  ? relatedProduct.discount
                  : 0;

              return (
                <Card
                  key={relatedProduct.id}
                  className="group hover:shadow-lg p-0 transition-all duration-300 bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105"
                  onClick={() => router.push(`/tienda/${relatedProduct.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center p-1">
                        <Image
                          src={`/images/webp/${relatedProduct.images[0]}`}
                          alt={relatedProduct.name}
                          width={220}
                          height={220}
                          className="object-contain max-h-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="p-2 text-center">
                      <p className="text-xs text-gray-600 font-medium mb-1 truncate">
                        {Array.isArray(relatedProduct.category)
                          ? relatedProduct.category[0]
                          : relatedProduct.category}
                      </p>
                      <h3 className="font-bold text-purple-800 mb-1 text-sm line-clamp-2 leading-tight">
                        {relatedProduct.name}
                      </h3>
                      {/* Precio SIEMPRE con tachado */}
                      <div className="text-lg font-bold text-gray-800 mb-2 flex flex-col items-center">
                        <span>{relatedProduct.price}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold shadow-sm transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddRelatedToCart(relatedProduct);
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  </div>
);
}
