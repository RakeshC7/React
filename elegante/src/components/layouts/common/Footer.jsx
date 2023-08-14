import logo from '../../../assets/image/elegante.svg';
import SocialIconList from './SocialIconList';
import paymentOptions from '../../../assets/image/paymentOptions.png';
import InputBox from '../../UI/InputBox';
import Button from '../../UI/Button';
import './Footer.css';

import React from 'react'

const Footer = () => {
    const SHOPLINK = [
        { id: 'Hair' },
        { id: 'Hair Care' },
        { id: 'Skin & personal Care' },
        { id: 'Makeup' },
        { id: 'Fragrance' },
        { id: 'Tools & accessories' },
        { id: 'Fashion & apparel' }
    ];
    const USEFULLINKS = [
        { id: 'Salon' },
        { id: 'Spa' },
        { id: 'Conference & events' },
        { id: 'Training' },
        { id: 'Studio' },
        { id: 'Restaurant' },
        { id: 'Arcade' }
    ];
    const CUSTOMERSERVICES = [
        { id: 'My Account' },
        { id: 'Contact Us' },
        { id: 'FAQ’s' },
        { id: 'About Us' },
        { id: 'Returns' },
        { id: 'Legal Policies' },
        { id: 'News' }
    ];
    return (
        <footer>
            <div className='container'>
                <div className='footerInner'>
                    <div className='footerWizard'>
                        <a href='#' className='siteLogo'>
                            <img src={logo} />
                        </a>
                        <SocialIconList />
                        <img src={paymentOptions} alt='payment options' className='paymentOptionImg' />
                        <div className='copyrightsText'>
                            <p>© Eleganté 2022</p>
                            <p>Site Designed & Developed by <a href='#'>RAC</a></p>
                        </div>
                    </div>
                    <div className='footerWizardNav'>
                        <h5>Shop</h5>
                        <ul>
                            {
                                SHOPLINK.map((shopLink) => (
                                    <li><a href='#'>{shopLink.id}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footerWizardNav'>
                        <h5>Useful Links</h5>
                        <ul>
                            {
                                USEFULLINKS.map((usefulLink) => (
                                    <li><a href='#'>{usefulLink.id}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footerWizardNav'>
                        <h5>Customer Services</h5>
                        <ul>
                            {
                                CUSTOMERSERVICES.map((customerService) => (
                                    <li><a href='#'>{customerService.id}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footerInputBox'>
                        <h5>Subscribe to our newsletter</h5>
                        <InputBox placeholder='Name' />
                        <InputBox placeholder='Email' />
                        <Button type='submit' className='darkButton'>Submit</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;