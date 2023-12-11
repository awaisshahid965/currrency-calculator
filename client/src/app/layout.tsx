'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/antd-registry'
import { ConfigProvider } from 'antd'
import AuthContainer from '@/context/auth/auth-container'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ConfigProvider>
            <AuthContainer>{children}</AuthContainer>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
