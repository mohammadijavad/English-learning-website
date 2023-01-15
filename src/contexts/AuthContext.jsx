import React, { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const login = async (data) => {
    setUser(data)
    navigate('/profile', { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
