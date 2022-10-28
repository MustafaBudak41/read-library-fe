import React from 'react'
import Spacer from '../../components/common/spacer/Spacer'
import HomeSearchBar from '../../components/user/home/home-searchbar/HomeSearchBar'
import MenuBar from '../../components/user/home/menu-bar/MenuBar'
import TopBar from '../../components/user/home/topbar/TopBar'

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <Spacer />
      <HomeSearchBar />
    </div>
  )
}

export default HomePage