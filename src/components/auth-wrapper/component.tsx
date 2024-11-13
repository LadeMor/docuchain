"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import NavigationPanel from "../navigation-panel/component";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
    useEffect(() => {
      
      const authStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");
  
      
      if (authStatus !== "true") {
        router.push("/register");
      }
    }, [router]);
  
    
    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }
  
    return (
        <div className="flex justify-start items-start">
            {isAuthenticated && <NavigationPanel />}
            {children}
        </div>
    );
  }