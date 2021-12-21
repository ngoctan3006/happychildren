import './DonatePage.css';
import Ellipse from './Ellipse.svg'
import img1 from './month_support_img3000.jpg'
import img2 from './month_support_img5000.jpg'
import img3 from './month_support_img10000.jpg'
import Header from '../Header/Header'

function DonatePage() {
  return (
    <div className="DonatePage">
      <Header/>
      <div className = "DetailText"><p>Request for donation / membership</p><br></br>Would you like to support the children together?<br></br></div>  
      <div className = "DetailSubText">Please donate to support the fledging of children who cannot rely on their parents.
Donations to the certified NPO Happy children are eligible for tax incentives.</div>
      <a href = "#" className="ClickForCorporations" style={{border: '2px solid #EB6446'}}>
        <div className="ButtonText" >Click here for corporations</div>
      </a>

      <a href="#" className="ClickForCorporations" style={{left: '735px', top: '558px', border: '2px solid #808080'}}>
        <div className="ButtonText" style={{color: '#000000'}}>Click here for tax benefits</div>
      </a>

      <a href="#" className="DonateButton" style={{left: '125px', top: '1000px'}}>
      <span className="DonateButtonText" style={{left: '44px', top: '20px', color: '#EB6446', width: '211px'}}>Become a continuous donation member
        <span className="ButtonSubText"><br></br>(Monthly donation)</span>
      </span>
      </a>

      <a href="#" className="DonateButton" style={{left: '502px', top: '1000px', background: '#BB4F3C'}}>
        <span className="DonateButtonText" style={{left: '44px', top: '30px', color: '#FFFFFF', width: '211px'}}>Donate
        <span className="ButtonSubText"><br></br>(One-off donation)</span></span>
      </a>
      <a href="#" className="DonateButton" style={{left: '879px', top: '1000px', background: '#BB4F3C'}}>
        <span className="DonateButtonText" style={{left: '47px', top: '28px', color: '#FFFFFF', width: '211px'}}>Gifts, things, etc
          <span className="ButtonSubText"><br></br>(Other donations)</span>
        </span>
      </a>

      <div className="BottomFrame">
        <span className="NormalText" style={{left: '92px', top:'88px', width: '967px'}}>By making a fixed monthly donation, we will continue to support children who cannot rely on their parents.</span>
        <span className="LargeNormalText" style={{left:'240px', top:'154px', width:'672px'}}>Please choose the payment method from the following.</span>
        <div className="Line" style={{top: '228px', left:'432px', width: '294px'}}></div>
        <div className="ClickForCorporations" style={{left:'391px', width:'182px', top:'264px', border: '2px solid #808080'}}>
        <span className="DonateButtonText" style={{width: '105px', top:'23px', left:'39px', color:'#000000'}}>Credit card</span>
        </div>
        <div className="ClickForCorporations" style={{left:'586px', width:'182px', top:'264px', border: '2px solid #808080'}}>
          <span className="DonateButtonText" style={{width: '132px', top:'18px', left:'25px', color:'#000000'}}>Bank transfer
            <span className="ButtonSubText" style={{width: '132px', left:'25px', top:'18px', height:'36px'}}><br></br>Annual payment only</span>
          </span>
          
        </div>
        <img src={Ellipse} vspace="340"></img>
        <span className="NormalText" style={{left: '384px', top:'392px', width: '384px', color:'#FFFFFF'}}>Your donations will support the fledging of children.</span>
        <div className="Line" style={{top: '434px', left:'433px', width: '294px', border:'1px solid #FFFFFF'}}></div>

        <img src={img1} className="ImgResize" style={{left: '120px', top:'482px'}}></img>
        <img src={img2} className="ImgResize" style={{left: '456px', top:'482px'}}></img>
        <img src={img3} className="ImgResize" style={{left: '792px', top:'482px'}}></img>

        <span className="DonateImgTitle" style={{left: '120px', top:'660px', width: '240px'}}>For 3,000 yen per month<br></br>

        </span>
        <span className="DonateImgTitle" style={{left: '456px', top:'660px', width: '240px'}}>For 5,000 yen per month<br></br>

        </span>
        <span className="DonateImgTitle" style={{left: '792px', top:'660px', width: '240px'}}>For 10,000 yen per month<br></br>

        </span>
        <span className="SmallNormalText" style={{left: '120px', top:'694px',width:'240px',color: '#FFFFFF'}}>You can have a monthly interview with a child who has started living alone. Prevents isolation and trouble after leaving the nest.</span>
        <span className="SmallNormalText" style={{left: '456px', top:'694px',width:'240px',color: '#FFFFFF'}}>We can deliver a total of 6 seminars to one third-year high school student to learn the knowledge and skills necessary for living alone.</span>
        <span className="SmallNormalText" style={{left: '792px', top:'694px',width:'240px',color: '#FFFFFF'}}>You can receive individual consultation from your child. If you have a problem, a professional staff will accompany you to a lawyer or the window of the government office.</span>
      </div>
      

      
      
    </div>
  );
}

export default DonatePage;
