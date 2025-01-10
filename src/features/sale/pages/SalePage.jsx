import React from 'react'
import Container from '../../../components/Container'
import Breadcrumb from '../../../components/Breadcrumb'
import SaleCard from '../components/SaleCard'

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={'Sale Module'} />
        <SaleCard/>
      </Container>
    </section>
  )
}

export default SalePage