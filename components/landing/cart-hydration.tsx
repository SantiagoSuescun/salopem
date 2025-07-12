"use client"

import { useEffect } from "react"
import { useCartStore } from "@/store/cartStore"

export default function CartHydration() {
  const { products } = useCartStore()

  useEffect(() => {
    // Trigger hydration after component mounts
    useCartStore.persist.rehydrate()
  }, [])

  return null
} 