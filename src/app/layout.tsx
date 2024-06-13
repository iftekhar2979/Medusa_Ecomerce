import { Metadata } from "next"
import "styles/globals.css"
import "./global.scss"
import 'tailwindcss/tailwind.css';
import 'carbon-components/css/carbon-components.min.css';
import SideMenu from "@modules/layout/components/side-menu";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        {/* <SideMenu regions={"us"}></SideMenu> */}
        <main className="relative">{props.children}</main>
       
      </body>
    </html>
  )
}
