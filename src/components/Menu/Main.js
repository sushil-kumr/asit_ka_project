import React from 'react'
import Startermenu from '../Allmenus/FirstMenu/Startermenu';
import Bredcom from '../Bredcrumb/Main'
import Specialmenu from '../Allmenus/Menmenu/Specialmenu';
import Listmenu from '../Allmenus/Menmenu/Listmenu';
import Secreservation from '../Allmenus/Menmenu/Secreservation';
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Img from '../../assets/images/background/banner-image-2.jpg'
import Menusection from '../Menhome/Menusection'


function Main() {
  return (
    <>
      <Bredcom
        subtitle="Our Menu"
        title="DELICIOUS & AMAZING"
        Img={Img}
      />

      <Menusection />
      {/* <Startermenu /> */}
      {/* <Specialmenu /> */}
      {/* <Listmenu /> */}
      {/* <Secreservation /> */}
      <Reservation />
      
    </>
  )
}

export default Main