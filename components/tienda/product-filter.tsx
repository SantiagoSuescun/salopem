// "use client";

// import { useState, useMemo, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cosmeticProducts } from "@/constants";

// export default function ProductFiltersSidebar({
//   searchTerm,
//   setSearchTerm,
//   selectedCategories,
//   setSelectedCategories,
//   selectedBrands,
//   setSelectedBrands,
//   sortBy,
//   setSortBy,
// }: {
//   searchTerm: string;
//   setSearchTerm: (v: string) => void;
//   selectedCategories: string[];
//   setSelectedCategories: (v: string[]) => void;
//   selectedBrands: string[];
//   setSelectedBrands: (v: string[]) => void;
//   sortBy: string;
//   setSortBy: (v: string) => void;
// }) {
//   // Obtiene categorías únicas
//   const categories = useMemo(() => {
//     return Array.from(
//       new Set(
//         cosmeticProducts.flatMap((product) =>
//           Array.isArray(product.category)
//             ? product.category
//             : [product.category]
//         )
//       )
//     );
//   }, []);

//   // Obtiene marcas únicas
//   const brands = useMemo(() => {
//     return Array.from(
//       new Set(cosmeticProducts.map((product) => product.brand))
//     );
//   }, []);

//   // Cambia selección de categorías
//   const handleCategoryChange = (category: string, checked: boolean) => {
//     setSelectedCategories((prev) =>
//       checked ? [...prev, category] : prev.filter((c) => c !== category)
//     );
//   };

//   // Cambia selección de marcas
//   const handleBrandChange = (brand: string, checked: boolean) => {
//     setSelectedBrands((prev) =>
//       checked ? [...prev, brand] : prev.filter((b) => b !== brand)
//     );
//   };

//   return (
//     <Card className="sticky top-4">
//       <CardContent className="p-6">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>

//         {/* Buscador */}
//         <div className="mb-6">
//           <Label htmlFor="search" className="text-sm font-medium mb-2 block">
//             Buscar productos
//           </Label>
//           <Input
//             id="search"
//             placeholder="Buscar..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="focus:border-[#33d6d1ff] focus:ring-[#33d6d1ff]"
//           />
//         </div>

//         {/* Filtro Categoría */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3 text-gray-700">Categoría</h3>
//           <div className="space-y-3">
//             {categories.map((category) => (
//               <div key={category} className="flex items-center space-x-2">
//                 <Checkbox
//                   id={`cat-${category}`}
//                   checked={selectedCategories.includes(category)}
//                   onCheckedChange={(checked) =>
//                     handleCategoryChange(category, checked as boolean)
//                   }
//                 />
//                 <Label
//                   htmlFor={`cat-${category}`}
//                   className="text-sm font-normal cursor-pointer"
//                 >
//                   {category}
//                 </Label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Filtro Marca */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3 text-gray-700">Marca</h3>
//           <div className="space-y-3">
//             {brands.map((brand) => (
//               <div key={brand} className="flex items-center space-x-2">
//                 <Checkbox
//                   id={`brand-${brand}`}
//                   checked={selectedBrands.includes(brand)}
//                   onCheckedChange={(checked) =>
//                     handleBrandChange(brand, checked as boolean)
//                   }
//                 />
//                 <Label
//                   htmlFor={`brand-${brand}`}
//                   className="text-sm font-normal cursor-pointer"
//                 >
//                   {brand}
//                 </Label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Ordenar por */}
//         <div>
//           <Label className="text-sm font-medium mb-2 block">Ordenar por</Label>
//           <Select value={sortBy} onValueChange={setSortBy}>
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="name">Nombre A-Z</SelectItem>
//               <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
//               <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
