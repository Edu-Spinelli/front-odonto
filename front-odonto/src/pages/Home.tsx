
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


import { ReactNode } from 'react';

interface HomeProps {
  children: ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}

      <div>
        <h1>Home</h1>
        <p>Welcome to your home page.</p>
      </div>
    </main>
  </SidebarProvider>

    
  )
}

export default Home
