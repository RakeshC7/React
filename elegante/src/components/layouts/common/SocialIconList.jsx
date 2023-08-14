import React from 'react';
import twitterIcon from '../../../assets/image/twitter_icon.svg';
import facebookIcon from '../../../assets/image/facebook_icon.svg';
import instagramIcon from '../../../assets/image/instagram_icon.svg';
import './SocialIconList.css';

const SocialIconList = () => {
    const SOCIALICONARRAY = [
        { id: 'twitter', img: twitterIcon, link: 'https://www.twitter.com' },
        { id: 'facebook', img: facebookIcon, link: 'https://www.facebook.com' },
        { id: 'instagram', img: instagramIcon, link: 'https://www.twitter.com' }
    ];
    return (
        <ul className='socialIconList'>
            {
                SOCIALICONARRAY.map((socialIcon) => (
                    <li key={socialIcon.id}>
                        <a target='_blank' rel="noreferrer" href={socialIcon.link}>
                            <img src={socialIcon.img} alt={socialIcon.id} />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default SocialIconList
