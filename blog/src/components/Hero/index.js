import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Hero = props => {
  const { 
    children, 
    themeStyle = style, 
    customStyle = 'hero is-cover is-relative is-default is-bold',
    avatar = 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/37120066_10155609598123093_8439467181653098496_n.jpg?_nc_cat=0&oh=adb58392f3e9747460eaa6108146d5db&oe=5C01677B'

  } = props;

  return (
    <div className={cx(themeStyle, customStyle)} style={{backgroundImage: 'url(https://source.unsplash.com/4flhKx1sUdE/1920x1080)', backgroundAttachment: 'fixed', backgroundPosition: '50% 0px' }}>
      {children}

      <div id={'main-hero'} className={'hero-body'}>
        <div className={'container'}>
          <div className={'columns is-vcentered is-centered'}>
            <div className={'column is-8'}>
              <span className={'tag squared is-medium is-primary mb-5'}>Featured Article</span>
              <div className={'flex-card media-card media-card-left light-bordered light-raised'}>
                <div className={'columns is-gapless is-desktop no-padding-right no-padding-left'}>
                  <div className={'column is-4 media-stretch'}>
                    <Link to='/'>
                      <img src="https://source.unsplash.com/1080x810/?meditate" className={'media-card-image'} />
                    </Link>
                  </div>
                  <div className={'column content-column'}>
                    <div className={'mcard-content'}>
                      <h2 className={'mcard-title'}>
                        <Link to='/'>The Absurdity of Expression</Link>
                      </h2>
                      <p className={'mcard-description'}>If one examines Marxist socialism, one is faced with a choice: either accept cultural discourse or conclude that narrativity is capable of significance. <Link to='/'>read more</Link></p>
                    </div>
                    <div className={'mcard-controls'}>
                      <div className={'mcard-avatar'}>
                        <img src={avatar} alt="Organic Man" />
                      </div>
                      <div className={'mcard-info'}>
                        <span>Joel Serino</span>
                        <div>
                          <span>10 Mar</span> <i className={'fa fa-circle'}></i>  <span><Link to='/' className={'category is-expression'}>Expression</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Hero;
