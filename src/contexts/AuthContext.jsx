import React, { useState } from 'react'
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const navigate = useNavigate()

  const login = async (data) => {
    setUser(data)
    localStorage.setItem('user', JSON.stringify(data))
    navigate('/profile', { replace: false })
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login', { replace: false })
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
