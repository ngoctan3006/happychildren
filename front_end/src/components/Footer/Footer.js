import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
            <div class="p-footer__copyArea">
                <div class="p-footer__copyLogo">
                    <Link to="/">
                        <img src="https://www.b4s.jp/wp-content/themes/b4s/assets/images/common/cmn_logo_bridge01_white.svg" alt="Bridge for Smile"/>
                    </Link>
                </div>
                <div class="p-footer__copyRight f-en">© Bridge for Smile.<br class="u-spBlock-i"/> All Rights Reserved.</div>
            </div>
        </footer>
    )
}