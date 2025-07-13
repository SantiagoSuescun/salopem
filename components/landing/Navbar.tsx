"use client"
import { nav } from "@/constants"
import Image from "next/image"
import { useState, useEffect } from "react" // Import useState
import { Button } from "../ui/button"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa"
import { BsPeople, BsWhatsapp } from "react-icons/bs"
import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"
import NavbarMovil from "./navbar-mobile"
import { Input } from "../ui/input"
import CarouselNavbar from "./carousel-navbar"
import { usePathname } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import CartSheet from "./cart-sheet"

function Navbar() {
  const pathname = usePathname()
  const cartCount = useCartStore((state) => state.getCount())
  const [isCartOpen, setIsCartOpen] = useState(false) // State to control cart sheet visibility
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <CarouselNavbar />
      <nav
        id="inicio"
        className="w-full px-2 md:px-8 py-4 bg-white shadow flex items-center justify-between relative z-50"
      >
        <Link href={"/"}>
          <div className="flex items-center pl-4">
            <Image
              src={"/images/webp/Logo.webp"}
              alt="logo"
              width={100}
              height={50}
              className="md:w-[160px] md:h-[60px] w-[90px] h-[40px] object-contain"
            />
          </div>
        </Link>
        {/* Menú centrado (desktop), visible siempre, scrollable si es necesario */}
        <div className="hidden xl:flex relative justify-center">
          <div className="flex gap-3 xl:gap-2 2xl:gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
            {nav.map((item) => (
              <Link
                href={item.url}
                key={item.url}
                className="relative flex flex-col items-center px-2 overflow-hidden"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                <span
                  className={`text-[17px] font-medium rounded transition-colors duration-200 ${pathname === item.url ? "text-purple-700 font-semibold" : "text-gray-700 hover:text-purple-600"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Search, perfil y carrito a la derecha (desktop) */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-gray-50 text-sm"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </span>
          </div>
          <Button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors">
            <BsPeople />
          </Button>
          <Button
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors relative"
            onClick={() => setIsCartOpen(true)} // Open cart sheet on click
          >
            <ShoppingCart />
            {isHydrated && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
        {/* Menú hamburguesa (mobile) */}
        <div className="xl:hidden flex items-center">
          <NavbarMovil />
        </div>
      </nav>
      <div className="fixed right-0 mt-8 gap-56 z-30 flex flex-col">
        <div className="flex items-center flex-col">
          <Link href="https://www.youtube.com/@salopem" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#FF0000] p-1.5 shadow-md transition-transform group-hover:scale-110">
              <FaYoutube size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://www.0iktok.com/@salopem" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-black p-1.5 shadow-md transition-transform group-hover:scale-110">
              <FaTiktok size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/salopem_" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-1.5 shadow-md transition-transform group-hover:scale-110">
              <FaInstagram size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/Salopem1" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#1877F3] p-1.5 shadow-md transition-transform group-hover:scale-110">
              <FaFacebookF size={25} className="text-white" />
            </div>
          </Link>
        </div>
        <div className="fixed right-0  bottom-8 gap-56 z-30 flex flex-col ">

          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#25D366] p-1.5 shadow-md transition-transform group-hover:scale-110">
              <BsWhatsapp size={25} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
      {/* Render CartSheet */}
      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default Navbar
