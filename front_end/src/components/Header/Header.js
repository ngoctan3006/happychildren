import images from './img';
import "./header.css";
import{ Link} from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            
            <div className="header__inner">
            <div className="header__wrapper">
                <div className="header__logo">
                    <a href="/">
                        <img src={ images.logo } alt = "Logo"/>
                    </a>
                </div>
                <div className="header__navBar">
                    <div className="header__navInner">
                        <div className="header__menu">
                            <ul className="header__list">
                                <li className="list--item menu--info">
                                    <a className="info" href="#">About Us</a>
                                    <div className="info__dropdown info--content">
                                        <div className="info--contentInner">
                                            <a href="#">About Us</a>    
                                            <a href="#">団体概要</a>    
                                            <a href="#">メディア掲載</a>    
                                            <a href="#">会計報告・年次報告書</a>   
                                        </div> 
                                    </div>
                                </li>
                                <li className="list--item"><a href="#">About Children</a></li>
                                <li className="list--item"><a href="#">News・Volunteers</a></li>
                                <li className="list--item"><a href="#">Philanthropists</a></li>
                                <li className="list--item"><a href="#">Help</a></li>
                            </ul>
                        </div>
                        
                        <button type="button" class="btn btn-success">
                            <Link
                            to='/login'
                            >
                                Login
                            </Link>
                        </button>
                        <button type="button" class="btn btn-outline-secondary">
                            <Link
                            to='/signup'
                            >
                                Sign Up
                            </Link>
                        </button>
                        
                        <ul class="p-header__langList f-en">
                            <li class="-jp active"><a href="/">JP</a></li>
                            <li class="-en"><a href="/en/">VN</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Header;
