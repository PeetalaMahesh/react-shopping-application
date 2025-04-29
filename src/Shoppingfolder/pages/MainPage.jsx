
import React ,{useState}from 'react'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

import {Gents, Ladies} from '../data'
import WomanCollection from '../components/WomanCollection'

const MainPage = () => {
  const [gentsFashion, setGents] = useState(Gents)
  const [ladiesFashion, setLadies] = useState(Ladies)
  console.log(Gents)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomanCollection ladiesFashion={ladiesFashion} />
      <Footer />
      </div>
  )
}

export default MainPage
