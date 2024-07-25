import Header from "@/components/header";
import {ClerkLoaded} from "@clerk/nextjs";


function DashboardLayout({children}: {children: React.ReactNode}) {
    
      return(
      
      <ClerkLoaded>      <div className="flex-1 flex flex-col">
      <Header/>{children}

      </div>
      </ClerkLoaded>
      );
      
    }
    
    export default DashboardLayout;