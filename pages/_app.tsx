import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import '../styles/style.css'



function MyApp({ Component, pageProps }: AppProps) {

  let styles = {
    paddingLeft: '8px'
  };

  let style1 = {
    backgroundColor: 'white',
    height: '250px',
    width:'450px',
    borderRadius: '20px',
    border:'1px solid',
    borderColor:'#dbd7cc',
    marginRight: '30px'
  }

  let flex = { display: 'flex', marginBottom: '10px' }

  let name = {
    marginLeft: '10px',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '14px',
    fontFamily: 'Lato'
  }

  let student = { marginLeft: '10px', marginTop: '10px' }

  let hr = { border: '1px solid #f2eeda' }

  let displayflex = { display: 'flex' }

  let topAreas = {
    marginLeft: '10px',
    marginTop: '12px',
    color: '#606060',
    fontSize: '14px',
    fontFamily: 'Lato'
  }

  let style2 = { marginLeft: '14px' }

  let style3 = {
    backgroundColor: 'white',
    height: '250px',
    width:'450px',
    borderRadius: '20px',
    border:'1px solid',
    borderColor:'#dbd7cc',
    marginLeft: '43px'
  }

  let area1 = {
    marginLeft: '10px',
    fontSize: '10px',
    marginTop: ' 10px',
    padding: '2px 4px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  }
  let area2 = {
    marginLeft: '10px',
    width: '67%',
    fontSize: '10px',
    marginTop: '10px',
    padding: '2px 4px',
    border: ' 1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  }
  let area3 = {
    marginLeft: '10px',
    width: '62%',
    fontSize: '10px',
    marginTop: '10px',
    padding: ' 2px 4px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  }

  let rdashboard = { height: '800px', width: 'auto', backgroundColor: '#f2eeda' }

  return <>
    <header>
      <div className="Nav-container">
        <nav className="nav d-flex">
          <a href="#" className="logo">
            <Image src="/assets/Rectangle.svg" width="50" height="62" alt="no support" ></Image>
          </a>

          <div className="menuBtn">
            <Image src="/assets/icons8-menu-24.png" width="24" height="24" alt="no support" ></Image>
          </div>
          <div className="navigation-bar">
            <ul>
              <li><a href="#">ASSIGNMENTS </a></li>
              <li><a href="#">INTERNSHIP</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <div style={rdashboard}>
      <div className="recruiter">Recruiter Dashboard</div>
      <div className="dropdown">
        <button className="dropbtn">
          Select Career &#x25BC;
        </button>
        <div id="myDropdown" className="dropdown-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          recusandae cumque vitae magni repellat aliquid inventore quis,
        </div>
        <button className="dropbtn">
          College Year &#x25BC;
        </button>
        <button className="dropbtn">
          Location &#x25BC;
        </button>
      </div>

      <div className="cross">
        Software development lifecycle
        <span style={styles}>&#10005;</span>
      </div>


      <div className="cards" >

        <div className="box" style={style1}>

          <div style={flex}>
            <div className="cardimgdiv">
              <Image
                src="/assets/Avtaaar.png"
                alt="No support"
                width='70px'
                height='65px'
                className="cardimg"

              ></Image>
            </div>

            <div>
              <div
                style={name}
              >
                Olivia Smith
              </div>
              <div className="info" style={student}>
                Student: Computer Engineering
              </div>
            </div>
          </div>
          <hr style={hr} />

          <div style={displayflex}>
            <div style={flex}>
              <div
                style={topAreas}
              >
                Top Areas
              </div>
              <div style={style2}>
                <div
                  className="info"
                  style={area1}
                >
                  Software Developement Life Cycle (SDLC)
                </div>
                <div
                  className="info"
                  style={area2}
                >
                  Software dev methodologies
                </div>
                <div
                  className="info"
                  style={area3}
                >
                  Git version control, Github
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="box2" style={style3}>

          <div style={flex}>
            <div className="cardimgdiv">
              <Image
                src="/assets/Avtaaar.png"
                alt="No support"
                width='70px'
                height='65px'
                className="cardimg"

              ></Image>
            </div>

            <div>
              <div
                style={name}
              >
                Curl Johnson
              </div>
              <div className="info" style={student}>
                Student: Computer Engineering
              </div>
            </div>
          </div>
          <hr style={hr} />

          <div style={displayflex}>
            <div style={flex}>
              <div
                style={topAreas}
              >
                Top Areas
              </div>
              <div style={style2}>
                <div
                  className="info"
                  style={area1}
                >
                  Software Developement Life Cycle (SDLC)
                </div>
                <div
                  className="info"
                  style={area2}
                >
                  Software dev methodologies
                </div>
                <div
                  className="info"
                  style={area3}
                >
                  Git version control, Github
                </div>
              </div>
            </div>
          </div>
        </div >

        
      </div >
    </div >


    <Component {...pageProps} />

  </>
}

export default MyApp
