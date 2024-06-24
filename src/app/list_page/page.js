import React from 'react'
import Header from "../components/Header"
import AddFeatures from "../components/AddFeatures.jsx"
import ListPage from '../components/ListPage'

function page() {
  return (
    <>
      <Header />
      <ListPage />
      <AddFeatures />
    </>
  )
}

export default page