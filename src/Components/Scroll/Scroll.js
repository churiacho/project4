import React from 'react'
import './Scroll.css';
import { Navbar, Nav } from 'react-bootstrap';

export default function Scroll() {
  return (
    <div className='scroll'>
      <Navbar className="justify-content-end" fixed="bottom" expand="*" id="arrow">

          <Nav.Link href="{this.props.top}" >
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 491.858 491.858" className='up' >

	<g>
		<path d="M491.858,442.461c0,13.931-11.293,25.224-25.224,25.224L245.93,373.097L25.224,467.686
			C11.292,467.686,0,456.392,0,442.461L227.011,32.58c0,0,18.918-18.918,37.834,0C283.764,51.499,491.858,442.461,491.858,442.461z"
			/>
	</g>

</svg>
 </Nav.Link>          


      </Navbar>




    </div>
  )
}
