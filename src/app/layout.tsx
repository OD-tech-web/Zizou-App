'use client'

import TopNavbar from '../components/TopNavbar'
import SideNavbar from '../components/SideNavbar'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200 dark:bg-[#070707]">
        <ThemeProvider attribute='class' enableSystem={true} storageKey="theme" defaultTheme='system'>
          <TopNavbar />
          <SideNavbar />
          <LeftSidebar />
          {children}
          <RightSidebar />
        </ThemeProvider>
      </body>
    </html>
  )
}
