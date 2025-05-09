'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<PerfectScrollbar className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex" href="/"><img className="light-mode" alt="Carento" src="/assets/imgs/template/logo-d.svg" /><img className="dark-mode" alt="Carento" src="/assets/imgs/template/logo-w.svg" /></Link>
						<div className="burger-icon burger-icon-white" onClick={handleMobileMenu} />
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading">
										<li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
											
											<Link href="/">Home</Link>
											
										</li>
										<li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
						
											<Link href="/about">About Us</Link>
											
										</li>
										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
											
											<Link href="/services">Services</Link>
											
										</li>
										{/* <li className={`has-children ${isAccordion === 4 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(4)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Shop</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
												<li><Link href="/shop-list">Shop Grid</Link></li>
												<li><Link href="/shop-details">Product Details</Link></li>
											</ul>
										</li> */}
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											
											<Link href="/pricing">Pricing</Link>
										
										</li>
										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
											
										<Link href="/faqs">FAQs</Link>
											
										</li>
										

										{/* <li className={`has-children ${isAccordion === 6 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(6)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">News</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
												<li><Link href="/blog-grid">News Grid</Link></li>
												<li><Link href="/blog-list">News List</Link></li>
												<li><Link href="/blog-details">News Details</Link></li>
											</ul>
										</li> */}
										<li><Link href="/contact">Contact Us</Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>
			{isMobileMenu && <div className="body-overlay-1" onClick={handleMobileMenu} />			}
		</>
	)
}
