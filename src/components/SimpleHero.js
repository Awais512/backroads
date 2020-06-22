import React from "react"

const SimpleHero = ({ children }) => {
  return (
    <div>
      <header className="defaultHero">{children}</header>
    </div>
  )
}

export default SimpleHero
