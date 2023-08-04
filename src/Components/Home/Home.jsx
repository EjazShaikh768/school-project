import React from 'react'
import Footer from '../Footer'
import Sliider from './Sliider'
import Homeabout from './Homeabout'
import Video_blog from './Video_blog'
import Homecards from './Homecards'
import Ourtoppers from './Ourtoppers'
import Qa from './Qa'

function Home() {
  return (
    <div>
      <Sliider />
      <Homeabout />
      <Video_blog />
      <Homecards />
      <Ourtoppers />
      <Qa />
      <Footer />
    </div>
  )
}

export default Home
