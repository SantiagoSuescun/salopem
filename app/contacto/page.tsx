import { GoogleMapsEmbed } from "@next/third-parties/google"
import { MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import EspadaLaserBarra from "@/components/landing/espada"

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-12 px-4 sm:px-6 lg:px-8">
            <EspadaLaserBarra text="Contacto" />

            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-1">
                    {/* Map Section */}
                    <div className="w-full h-[400px]">
                        <GoogleMapsEmbed
                            apiKey="AIzaSyDD5CTWuUisT96XuGLzkwkwLtN93m-m80w" // Replace with your actual Google Maps API Key
                            height="400px"
                            width="100%"
                            mode="place"
                            q="Calle 54 # 36B- 108 Barrancabermeja, Santander"
                            loading="lazy"
                        />
                    </div>

                    {/* Contact Info and Form Section */}
                    <div className="p-8 space-y-8 flex flex-col md:flex-row justify-between">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Nuestra Ubicación
                            </h2>
                            <div className="flex items-center gap-3 text-gray-700">
                                <MapPin className="w-5 h-5 text-gray-600" />
                                <span>Calle 54 # 36B- 108 Barrancabermeja, Santander</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <Phone className="w-5 h-5 text-gray-600" />
                                <span>3132012875</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <Mail className="w-5 h-5 text-gray-600" />
                                <span>Contactosalopem@gmail.com</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-8 w-[50%]">
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name" className="sr-only">
                                        Nombre
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Nombre"
                                        className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="lastName" className="sr-only">
                                        Apellido
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Apellido"
                                        className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="sr-only">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="sr-only">
                                        Teléfono
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="address" className="sr-only">
                                    Dirección
                                </Label>
                                <Input
                                    id="address"
                                    placeholder="Dirección"
                                    className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <Label htmlFor="message" className="sr-only">
                                    Escribe tu mensaje aquí
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Escribe tu mensaje aquí"
                                    className="min-h-[120px] bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-300"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-[#8F82ED] hover:bg-purple-600 text-white py-3 rounded-md text-lg font-semibold"
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
