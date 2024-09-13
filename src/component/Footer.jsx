import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="home-footer">
                <p className="home-footer-text">
                    &copy; 2024 Our Website. All rights reserved.
                </p>
                <nav className="home-footer-nav">
                    <a href="/terms" className="home-footer-link">Terms of Service</a>
                    <a href="/privacy" className="home-footer-link">Privacy Policy</a>
                </nav>
            </footer>
    </div>
  )
}

export default Footer