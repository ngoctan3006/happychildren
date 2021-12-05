import {Container, Row, Col, } from 'react-bootstrap';
import images from './img';
import "./header.css";
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
                                    <a className="info" href="#">私たちについて</a>
                                    <div className="info__dropdown info--content">
                                        <div className="info--contentInner">
                                            <a href="#">ブリッジフォースマイルとは</a>    
                                            <a href="#">団体概要</a>    
                                            <a href="#">メディア掲載</a>    
                                            <a href="#">会計報告・年次報告書</a>   
                                        </div> 
                                    </div>
                                </li>
                                <li className="list--item"><a href="#">「親を頼れない」子どもの現状</a></li>
                                <li className="list--item"><a href="#">ニュース・活動報告</a></li>
                                <li className="list--item"><a href="#">巣立ち支援</a></li>
                                <li className="list--item"><a href="#">サポーター活動</a></li>
                                <li className="list--item"><a href="#">お問い合わせ</a></li>
                            </ul>
                        </div>
                        <div className="header__donateButton">
                            <a>寄付・入会のお願い</a>
                        </div>
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
