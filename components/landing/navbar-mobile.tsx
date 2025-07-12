"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { nav } from '@/constants'
import Link from 'next/link'
import { usePathname } from "next/navigation";

function NavbarMovil() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger>
                <div
                    className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 mr-2"
                    aria-label="Abrir menú"
                >
                    <Menu />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                    <div className="flex flex-col gap-4 mt-6 px-2">
                        {nav.map((item) => (
                            <Link
                                key={item.url}
                                href={item.url}
                                className={`text-base font-medium py-1 px-2 rounded transition-all duration-200 border-b ${pathname === item.url
                                    ? "text-purple-700 font-bold border-purple-400 underline underline-offset-4"
                                    : "text-gray-700 border-transparent"
                                    }`}
                                style={{ letterSpacing: "0.5px" }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarMovil
