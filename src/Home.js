import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id={12345}
          title='Sony Alpha a6400 Mirrorless Camera: Compact APS-C Interchangeable Lens Digital Camera with Real-Time Eye Auto Focus, 4K Video, Flip Screen & 18-135mm Lens - E Mount Compatible Cameras - ILCE-6400M/B'
          price={1298.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71zs%2BRZUggL._AC_SX569_.jpg'
        />

        <Product
          id={54321}
          title='ASUS Radeon RX Vega 64 8GB Overclocked 2048-Bit HBM2 PCI Express 3.0 HDCP Ready Video Card (STRIX-RXVEGA64-O8G-GAMING)'
          price={399.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71KKXZ%2BGxwL._AC_SX679_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id={98765}
          title='Vandor 18062 Hello Kitty 18 oz Oval Ceramicl Mug, Pink, White, and Red - SS-VG-18062'
          price={26.76}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41kpkotfl9L._AC_.jpg'
        />

        <Product
          id={56789}
          title='Funko Pop Animation: Yu-Gi-Oh! - Dark Magician Girl Collectible Figure, Multicolor '
          price={32.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51DlbmVJCQL._AC_.jpg'
        />

        <Product
          id={24680}
          title='Composition Notebook: Hello Kitty Wide Ruled Blank Lined Themed Journal Paper 7.44 x 9.69 Inches 110 Pages '
          price={6.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51MQMSt3MmL._SX331_BO1,204,203,200_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id={13579}
          title='Vandor 18001 Hello Kitty Sculpted Ceramic Mug, White, Red, Black, and Yellow '
          price={14.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/517JS5Qy%2BuL._AC_SX569_.jpg'
        />
        <Product
          id={624624}
          title='West Paw Zogoflex Tizzi Treat Dispensing Dog Toy – Interactive Play Toy for Dogs, Puppies – Floatable, High-Flying Dog Toys for Fetch, Catch, Tug of War, Recyclable, Dishwasher Safe, Made in USA'
          price={12.95}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71JeCdolmgL._AC_SX425_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
