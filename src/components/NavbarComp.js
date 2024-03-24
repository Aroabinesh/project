import React, { useEffect, useState }  from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavCss.css';
import axios from 'axios';

const NavbarComp = () => {
  const a = 19;
  const n = 26;
  const p = 2015;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  const k = 11;
  const l = 12;
  const m = 13;
  const o = 14;
  const q = 2016;
  const r = 2018;
  const s = 2019;
  const id=2;
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios.get(`https://localhost:7106/api/branch/getbranches`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
    }).catch((err) => {});
  };

  return (
    
   <div>
      <div style={{height:'89px',backgroundColor:'white'}}>
      <Link to= {'/StuComp'} style={{paddingLeft:'-0px',padding:'30px',variant:'info'}}>Student</Link>
        <ButtonGroup style={{padding:'30px',paddingRight:'80px'}}>
      <Dropdown>
      <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
  <b>Tamil Nadu</b>
</Dropdown.Toggle>

      
        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
        {/* {products.slice(0).map((product) => (
          <Dropdown.Item key={product.b}>
            <Link className='btn' to={`/Details/${b}`}>{product.bName}</Link>
          </Dropdown.Item>
        ))} */}
         <Dropdown.Item><Link className='btn ' to={`/Student/${p}`}>Chennai-Nungambagam</Link></Dropdown.Item>
          <Dropdown.Divider />
          
          <Dropdown.Item><Link className='btn ' to={`/Details/${n}`}>Chennai-Vadapalani</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
    
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>


        <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
         <b>Kerala</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Details/${c}`}>Kerala-Kochi</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${d}`}>Kerala-Kollam</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${e}`}>Kerala-Thrissur</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
         
          
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}}>

      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
         <b> New Delhi</b>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Details/${f}`}>New Delhi-Kalkaji</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${g}`}>New Delhi-gurugram</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
         

        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
   
    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
       <b>Karnataka</b> 
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Details/${h}`}>Karnataka-Whitefeild</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${i}`}>Karnataka-Electronic city</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Details/${j}`}>Karnataka-Hebbal</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
       <b>Pune</b>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Details/${k}`}>Pune-Lonavala</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${l}`}>Pune-Harihar</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Details/${m}`}>Pune-Kilokri</Link></Dropdown.Item>
          <Dropdown.Divider />
        
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup style={{paddingRight:'80px'}}>
      <Dropdown>
        <Dropdown.Toggle className="custom-dropdown-toggle" variant="primary" id="dropdown-basic">
       <b>Goa</b>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'lightgrey'}}>
          <Dropdown.Item><Link className='btn ' to={`/Details/${q}`}>Goa-Panaji</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ><Link className='btn ' to={`/Details/${r}`}>Goa-Calangute</Link> </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link className='btn ' to={`/Details/${s}`}>Goa-Baga</Link></Dropdown.Item>
          <Dropdown.Divider />
        
          <Dropdown.Item > <Link to={`/Add`} className='btn btn-primary' >Add</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
   
  
        {/* Add other ButtonGroups for different locations as needed */}
      </div>
      <div
     
      style={{
        backgroundImage: 'url("https://getwallpapers.com/wallpaper/full/f/2/5/537218.jpg")',
        backgroundSize: 'cover', // Added to cover the entire screen
         minHeight: '88vh', // Added to cover the entire viewport height
         position:'relative'
      }}
    >
      </div>
      </div>
  );
  
};

export default NavbarComp;






