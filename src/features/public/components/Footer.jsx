import React from 'react'
import Container from '../../../components/Container'

const Footer = () => {
  return (
    <div className=" mt-auto">
      <Container>
        <p className="text-center py-5">© {new Date().getFullYear()} INVOICE-Generator</p>
      </Container>
    </div>
  );
}

export default Footer