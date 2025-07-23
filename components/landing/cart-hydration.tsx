"use client"

import { useEffect } from "react"
import { useCartStore } from "@/store/cartStore"

export default function CartHydration() {

  useEffect(() => {
    // Trigger hydration after component mounts
    useCartStore.persist.rehydrate()
  }, [])

  return null
} 