"use client"
import ProductDetail from "@/components/tienda/productDetail"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cosmeticProducts } from "@/constants"
import { ChevronLeft, ChevronRight, Search, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState, useEffect } from "react"
import { useCartStore } from "@/store/cartStore"

export default function CosmeticProductFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6)
  const [showToast, setShowToast] = useState(false)
  const addProduct = useCartStore((state) => state.addProduct)

  // Get unique categories
  const categories = useMemo(() => {
    // Aplana todos los arrays de categorías y elimina duplicados
    return Array.from(
      new Set(
        cosmeticProducts.flatMap((product) =>
          Array.isArray(product.category) ? product.category : [product.category]
        )
      )
    );
  }, []);

  // Effect to handle brand parameter from URL
  useEffect(() => {
    const brandParam = searchParams.get('brand')
    if (brandParam) {
      // Buscar la categoría que coincida (case-insensitive)
      const matchingCategory = categories.find(category => 
        category.toLowerCase() === brandParam.toLowerCase()
      )
      
      if (matchingCategory) {
        setSelectedCategories([matchingCategory])
        setCurrentPage(1)
      }
    }
  }, [searchParams, categories])

  const handleAddToCart = (product: any) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: `/images/webp/${product.image}`,
    })
    
    // Mostrar toast
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = cosmeticProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Soporta productos con una o varias categorías
      const productCategories = Array.isArray(product.category)
        ? product.category
        : [product.category];

      const matchesCategory =
        selectedCategories.length === 0 ||
        productCategories.some((cat) => selectedCategories.includes(cat));

      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.')) -
            parseFloat(b.price.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.'));
        case "price-high":
          return parseFloat(b.price.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.')) -
            parseFloat(a.price.replace(/[^0-9.,]/g, '').replace('.', '').replace(',', '.'));
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategories, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-0 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-right duration-300">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-medium">¡Producto agregado al carrito!</span>
        </div>
      )}

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Productos Cosméticos</h1>
            <p className="text-gray-600">Descubre nuestra colección premium de cuidado personal</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>
                  {/* Search */}
                  <div className="mb-6">
                    <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                      Buscar productos
                    </Label>
                    <div className="relative">
                      <Input
                        id="search"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value)
                          setCurrentPage(1)
                        }}
                        
                      />
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Categorías</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                          />
                          <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Sort */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Ordenar por</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Nombre A-Z</SelectItem>
                        <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                        <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                        <SelectItem value="rating">Mejor Calificación</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Mostrando {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} de{" "}
                  {filteredAndSortedProducts.length} productos
                </p>
              </div>
              {currentProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No se encontraron productos</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {currentProducts.map((product, index) => (
                      <Card
                        key={index}
                        className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer bg-gradient-to-br from-cyan-100 to-blue-100 "
                        onClick={() =>
                          router.push(`/tienda/${product.id}`)
                        }
                      >
                        <CardContent className="p-0 ">
                          <div className="relative">
                            <div className=" flex items-center justify-center">
                              <Image
                                src={`/images/webp/${product.image}`}
                                alt={product.name}
                                width={260}
                                height={300}
                                className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            {product.discount && (
                              <Badge className="absolute top-2 left-2 bg-purple-500 hover:bg-purple-600">
                                -{product.discount}%
                              </Badge>
                            )}

                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 text-black line-clamp-2 ">
                              {product.name}
                            </h3>
                            <p className=" text-sm mb-3 line-clamp-2">{product.description}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {product.benefits.slice(0, 2).map((benefit, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-xl font-bold text-gray-800">{product.price}</div>
                              <Button
                                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleAddToCart(product)
                                }}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Agregar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "outline"}
                              size="sm"
                              onClick={() => handlePageChange(page)}
                              className={currentPage === page ? "bg-cyan-500 hover:bg-cyan-600" : ""}
                            >
                              {page}
                            </Button>
                          )
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <span key={page} className="px-2">
                              ...
                            </span>
                          )
                        }
                        return null
                      })}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

