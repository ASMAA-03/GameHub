import Link from "next/link";

function Footer(){
  return(
    <>
    <footer className="footer_section">
        <div className="footer_col">
          <h2>🎮GAME HUB</h2>
          <p>The ultimate gaming platform for everyone</p>
        </div>

        <div className="footer_col">
        <h2>Platfrom</h2>
        <ul>
          <li>Games</li>
          <li>Tournaments</li>
          <li>Community</li>
        </ul>
        </div>

        <div className="footer_col">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer_col">
          <h2>Follow Us</h2>
          <Link href="#">Twitter</Link>
          <Link href="#">Discord</Link>
          <Link href="#">Twitch</Link>
        </div>

        </footer>

        <div className="fotter_bottom">
              © 2026 GAME HUB. All rights reserved.
        </div>
  </>
  )
}
export default Footer


