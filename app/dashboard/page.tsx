import {ClerkLoaded} from "@clerk/nextjs"
import "./globals.css";



export default function RootLayout({

    children, }:Readonly<{children: React.ReactNode;

    }>){

        return(
            <ClerkLoaded>
            <html>
        
        
       <body className="min-h-screen h-screen overflow-hidden flex flex-col">

       {children}
       </body>
       </html>
       
        </ClerkLoaded>
        )
    }


