import { getByPlaceholderText } from '@testing-library/react'
import React from 'react'

const Footer = () => {

  // let footerStyle = {
  //   position: "absolute",
  //   top: "100vh",
  //   width: "100%"
  // }
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <p className="text-center"></p>
      Copyright &copy; MyTodosList.com
    </footer>
  )
}

export default Footer
