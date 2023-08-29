"use client"
import React, {ReactNode} from 'react'
import { SessionProvider } from "next-auth/react"

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {

  console.log(children)
  return (
    <SessionProvider >
        {children}
    </SessionProvider>
  )
}

export default Provider