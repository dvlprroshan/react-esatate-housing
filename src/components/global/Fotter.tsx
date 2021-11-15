// fotter section home page

const Fotter = (): JSX.Element => {
    return <div className="fotter">
        <div className="main">
            <div className="left">
                <div className="footer-logo">
                    <img src="/assets/images/brand_logo_light2.png" alt="" />
                </div>
                <div className="brand-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy
                </div>
                <ul className="menu">
                    <li><a href="#">Properties</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy & Policy</a></li>
                    <li><a href="#">Disclamer</a></li>
                </ul>
            </div>
            <div className="right">
                <div className="title">Contact Us</div>
                <div className="text"> E/204, Drawka Sector- 23, New Delhi - 110037</div>
                <div className="title">Toll Free - 1800 41 9XXX</div>
                <div className="text">Monday - Saturday (9:00AM to 7:00PM IST)</div>
                <div className="title">Email - feedback@housingweb.com</div>
                <div className="title">Connect with us</div>
                <div className="social-icons">
                    <a href="#"><img src="/assets/images/icons/facebook.png"></img></a>
                    <a href="#"><img src="/assets/images/icons/instagram.png"></img></a>
                    <a href="#"><img src="/assets/images/icons/twitter.png"></img></a>
                    <a href="#"><img src="/assets/images/icons/youtube.png"></img></a>
                </div>
            </div>
        </div>
        <div className="copyright">© 2021 HousingWeb. All right reserved</div>
    </div>
}


export default Fotter;