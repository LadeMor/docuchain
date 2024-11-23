"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import NavigationPanel from "../navigation-panel/component";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);

  useEffect(() => {

    const fetchProtectedData = async () => {
      try {
        const response = await fetch("http://localhost:3001/protected", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }

        const data = await response.json();
        
      } catch (error) {
        if (error instanceof Error) {

          console.error("Error:", error.message);
        } else {

          console.error("An unknown error occurred", error);
        }
      }
    };

    fetchProtectedData();
  }, [router]);

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/register");
    }
  }, [isAuthenticated, router]);

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