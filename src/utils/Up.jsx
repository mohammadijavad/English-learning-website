import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

function Up() {
  const [top, setTop] = useState(0)
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [top])

  return (
    <>
      {top > 200 && (
        <>
          <div
            className="arrowUp  d-flex align-items-center justify-content-center curoser"
            onClick={scrollTop}
          >
            <BsArrowUp size={17} />
          </div>
        </>
      )}
    </>
  )
}

export default Up
