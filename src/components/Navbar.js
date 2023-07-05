import React from 'react'
import myimg from '../assets/img.png';
import imgg from '../assets/imgg.png';

function Navbar() {
  return (<>
    <div className='nav'>

      <nav className='navbar'>
        <img alt='myimg' src={myimg} className='img' />
        <h3 className='hire'>we are hiring</h3>
        {/* <img alt='myimg2' src='{myimg2}' */}
        <ul className='list'>
          <li ><a>Work</a></li>
          <li ><a>Services</a></li>
          <li ><a>Blogs</a></li>
        </ul>


        <button className='btn'>Get in touch</button>


      </nav>
      <div className='text' >
        <section>
          <h3 >We are</h3>
          <h1>bunch of techies & designers creating digital prducts</h1>
          <h3>have an idea in mind,need someone to discuss with.Reach out to us.We would more happy to help you</h3>

        </section>

      </div>
      <button className='bt'>Start project now</button>
      <div className='achievement'>
        <div className='achieve'>
          <div className='ach'>
            <h1>358</h1>
            <h3>project delivered</h3>
          </div>
          <div className='ach'>
            <h1>47+</h1>
            <h3>Team size</h3>
          </div>

        </div>

        <div className='achieve'>
          <div className='ach'>
            <h1>250+</h1>
            <h3>Clients</h3>
          </div>
          <div className='ach'>
            <h1>15+</h1>
            <h3>Countries</h3>
          </div>

        </div>

      </div>
      <div className='imgg'>
      <img alt='imgg' src={imgg}  />
      </div>
      
    </div>

  </>
  )
}

export default Navbar