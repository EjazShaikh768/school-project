import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sliider from './Sliider'
import Homeabout from './Homeabout'
import Video_blog from './Video_blog'
import Homecards from './Homecards'
import Ourtoppers from './Ourtoppers'

function Home() {
  return (
    <div>
      <Header />
      <Sliider />
      <Homeabout />
      <Video_blog />
      <Homecards />
      <Ourtoppers />
      <Footer />
    </div>
  )
}

export default Home
