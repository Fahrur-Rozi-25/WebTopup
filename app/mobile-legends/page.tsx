'use client'

import ComponentNavbar from "@/components/Navbar/Navbar";
import ButtonPills from "@/app/mobile-legends/components/buttons/buttons";
import ComponentFooter from "@/components/footer/footer";
import Test from "../Text/Development";
import InputID from "./components/inputID/InputID";
import { Card } from "flowbite-react";
import Cards from "./components/card/Card";



export default function MobileLegends() {
return(
    <main>
        <ComponentNavbar />
        <Test />
        <Cards />
        <Card className="font-bold ml-2 m-5 mt-10">Langkah 1. Masukkan ID Game Anda.</Card>
        <InputID />
        <Card className="font-bold ml-2 m-5">Langkah 2. Pilih Jumlah Diamond.</Card>

        <ButtonPills />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}