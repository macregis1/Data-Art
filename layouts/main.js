
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="service.html">Services</a></li>
                </ul>
            </nav>
        </header >
        `
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer>
        <div class="footer-content" style='margin-bottom:-70px;'>
            <div class="footer-section">
                <div class="col-md-3  colorlib-widget">
                    <h4>About Company</h4>
                    <div class="colorlib-widgets">
                        <p>Data Alt. Ltd is a registered research and management consulting
                            that offers innovative research, impact evaluation, management
                            consulting, and capacity building services<a href='about.html'>->more</a></p>
                    </div>
                    <ul class="colorlib-social-icons">
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-section">
                <div class="col-md-3 col-md-push-1">
                    <h4>Quick link</h4>
                    <ul class="colorlib-footer-links">
                        <li><span>&mdash; <a href="index.html">Home</a></span></li>
                        <li><span>&mdash; <a href="about.html">About</a></span></li>
                        <li><span>&mdash; <a href="service.html">Services</a></span></li>
                        <li><span>&mdash; <a href="contact.html">Contact</a></span></li>
                    </ul>
                </div>
            </div>
            <div class="footer-section">
                <div class="col-md-3 col-md-push-1">
                    <h4>Contact Info</h4>
                    <ul class="colorlib-footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> Kigali, Rwanda</li>
                        <li><a href="tel://+250788208354"><i class="fas fa-phone"></i> +250 788 208 354</a></li>
                        <li><a href="mailto:dataalt9@gmail.com"><i class="fas fa-envelope"></i> dataalt9@gmail.com</a>
                        </li>
                        <li><a href=""><i class="fab fa-internet-explorer"></i> Data Alt. Ltd</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>
                <small class="block">&copy; 2024 All Rights Reserved.</small>
                <small class="block">Designed by <a href="#" target="_blank">Data Alt. Ltd</a></small>
            </p>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);

