import React from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import img from './ExampleCarouselImage/p4.jpg';
import img1 from './ExampleCarouselImage/p7.png';
import img2 from './ExampleCarouselImage/p6.webp';


const StuComp = () => {
  const a =2;
  
  const c =3;
  const d =4;
  const e =5;
  const f =6;
  const g =7;
  const h =8;
  const i =9;
  const j =10;
  const k =11;
  const l =12;
  const m =13;
  const n =26;
  const p =2015;
  const q =2016;
  const r =2018;
  const s =2019;
  

  

  return (
    <div >
      
      <div style={{height:'89px',backgroundColor:'white'}}>
        <Link to= {'/NavbarComp'} style={{paddingLeft:'-0px',padding:'30px',variant:'info'}}>Admin</Link>
    <ButtonGroup style={{padding:'30px',paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic" >
         <b>Tamil Nadu</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${p}`}>Chennai-Nungambagam</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${n}`}>Chennai-Vadapalani</Link> </Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
          <b>Kerala</b>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${c}`}>Kerala-Kochi</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${d}`}>Kerala-Kollam</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${e}`}>Kerala-Thrissur</Link> </Dropdown.Item>
          
          
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}}>

      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
         <b>New Delhi</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${f}`}>New Delhi-Kalkaji</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${g}`}>New Delhi-gurugram</Link> </Dropdown.Item>
          
         

        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
   
    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
       <b>Karnataka</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${h}`}>Karnataka-Whitefeild</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${i}`}>Karnataka-Electronic city</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Student/${j}`}>Karnataka-Hebbal</Link></Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
       <b>Pune</b>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${k}`}>Pune-Lonavala</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${l}`}>Pune-Harihar</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Student/${m}`}>Pune-Kilokri</Link></Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}} >
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
      <b>Goa</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Student/${q}`}>Goa-Panaji</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Student/${r}`}>Goa-Calangute</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Student/${s}`}>Goa-Baga</Link></Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    
    </div>

    {/* <div
     
    style={{
      backgroundImage: 'url("https://cdn.pixabay.com/photo/2024/01/07/16/27/reed-8493547_1280.jpg")',
      backgroundSize: 'cover', // Added to cover the entire screen
       minHeight: '88vh', // Added to cover the entire viewport height
    }}
  >
    </div> */}
         <div style={{ margin: 0, padding: 0, overflowX: 'hidden', }}>
                <Carousel style={{ width: '100%', margin: 0, padding: 0,minHeight:'100vh' }}>
                <Carousel.Item interval={1000}>
                        <div style={{ position: 'relative' }}>
                          
                            <img className="d-block w-100"  src={img2}  alt="Institute" style={{ height: '100%', objectFit: 'cover', position:'relative' }} />
                            
                            <div className="carousel-caption custom-caption">
                            <h3 style={{ color: 'white',float:'left' }}>Welcome To Net Technologies</h3>
                            
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div style={{ position: 'relative'}}>
                            <img className="d-block w-100" src={img} alt="Institute" style={{ height: '100%', objectFit: 'cover', position:'relative' }} />
                            <div className="carousel-caption custom-caption">
                            <h3 style={{ color: 'white',float:'left' }}>learning New Technologies</h3>
                                
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div style={{ position: 'relative' }}>
                            <img className="d-block w-100" src={img1} alt="Institute" style={{ height: '100%', objectFit: 'cover', position:'relative' }} />
                            <div className="carousel-caption custom-caption">
                            <h3 style={{ color: 'white',float:'center' }}>.NetTech is the world’s ace software training organization with an aim to bridge the gap between the demands of the industry and the curriculum of educational institutions.
With centers across the Globe, the institute is a platform where young minds are given the opportunity to build successful careers.
"NetTech is a place where businesses find talent and dreams take flight."</h3>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
    
      </div>
    
    
    </div>
    
  );
};

export default StuComp;
