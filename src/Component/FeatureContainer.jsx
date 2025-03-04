import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrontViewComponent from './Home_Container_Component/FrontViewComponent';
import FirstViewComponent from './Home_Container_Component/FirstViewComponent';
import EmojiAnimations from './Home_Container_Component/EmojiAnimations';
import BottomViewComponent from './Home_Container_Component/BottomViewComponent';
import BackViewComponent from './Home_Container_Component/BackViewComponent';
import Contactus from './Contactus';

gsap.registerPlugin(ScrollTrigger);

const FeatureContainer = ({ id, label, onEnter }) => {
  const containerRef = useRef();

  useEffect(() => {
    const element = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true, // Smooth animation tied to scroll
        onEnter: () => onEnter(),
      },
    });

    tl.fromTo(
      element.querySelector('.content'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    return () => {
      tl.kill(); // Clean up ScrollTrigger on component unmount
    };
  }, [id, onEnter]);

  const renderContent = () => {
    switch (label) {
      case 'First view':
        return <FirstViewComponent />;
      case 'just thing view':
        return <EmojiAnimations />
      case 'Front View':
        return <FrontViewComponent />;
      case 'Bottom View':
        return <BottomViewComponent />;
      case 'Back View':
        return <BackViewComponent />;
        case 'Contact View':
          return <Contactus />
      default:
        return <DefaultComponent />;
    }
  };

  return (
    <div
      id={id}
      ref={containerRef}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="content">{renderContent()}</div>
    </div>
  );
};

// Example of specific components
const DefaultComponent = () => <h1>Default Content</h1>;

export default FeatureContainer;
