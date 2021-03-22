/* global tw */
{/* Imports */}
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import star from '../images/star.svg'
import avatar from '../images/avatar.jpg';
import '../styles/global';

{/* Variable Definitions */}
const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const DividerTop = styled(Divider)`
  clip-path: polygon(0 35%, 100% 25%, 100% 65%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-black mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-black mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${star});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const ContactTitle = styled.h1`
${tw('text-4xl lg:text-4xl font-serif text-black mb-8 tracking-wide relative inline-block')};
text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
&:before {
content: '';
width: 40px;
height: 40px;
background: url(${triangle});
position: absolute;
background-size: 40px;
animation: ${rotate} 4s linear infinite;
left: -60px;
top: 5px;
}
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-black mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-black pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-black text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-black font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #001154;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

{/* Index Page Implementation */}
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={1.9}>
     <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 100%, DeepSkyBlue 0%)"
        speed={-.1}
        offset={-1.5}
        factor={1.8}
      />
      <Divider speed={0.2} offset={0}>
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hi, <br /> I'm Farzaan Kaiyom.
          </BigTitle>
          <Subtitle> I'm currently focused on building <a href="https://gradiahealth.com">Gradia Health.</a>. I studied computer science at Stanford and have found an interest in machine learning through research at IBM and Stanford. </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-.1}
        offset={0.5}
        factor={1.8}
      />
       
      
      <Divider speed={0.1} offset={0.8} factor={2}>
      </Divider>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-.1}
        offset={4}
        factor={10}
      />
      
      <Content speed={0.4} offset={1}>
        <Inner>
          <ContactTitle>Contact Info</ContactTitle>
          <ContactText>
            If you're interested in my work or want to chat, <a href="mailto:farzaan@gradiahealth.com">email me (farzaan@gradiahealth.com)</a> 
          </ContactText>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1}>
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
