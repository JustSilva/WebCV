import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>
        <div class="bottom-container">
            <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
            <a class="footer-link" href="">Website</a>
            <p class="copyright">© {year} Pedro Silva</p>
        </div>
    </footer>
}

export default Footer;