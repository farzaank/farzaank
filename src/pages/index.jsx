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
    <Parallax pages={5}>
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
          <Subtitle>I'm a computer science student and research assitant at Stanford interested in network science, machine learning, and their real world applications. Some of my projects can be found below. </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-.1}
        offset={0.5}
        factor={1.8}
      />
      <Content speed={0.4} offset={0.95} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
          <ProjectCard
              title="Konexio Interact Platform "
              link="https://codethechange.github.io/codethechange.konexio-mern-stack/"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Konexio Interact is a web app that matches low income individuals to mentors in France. I led a team of volunteers developing it through Code the Change.
            </ProjectCard>
            <ProjectCard
              title="BioSNAP Knowledge Graph"
              link="https://github.com/snap-stanford/miner-data"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              BioSNAP is the largest biomedical knowledge graph with detailed edges and nodes to date. I made it during my summer internship doing research at Stanford. I've made compilation scripts as well as sample machine learning tasks using the graph publicly available.
            </ProjectCard>
            <ProjectCard
              title="DecentraLibrary"
              link="https://github.com/farzaank/DecentraLibrary"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              DecentraLibrary is a blockchain based app that uses Ethereum technology to create a secure and fast ledger of books in a library.
            </ProjectCard>
            <ProjectCard
              title="Math Royale"
              link="https://github.com/farzaank/MathRoyale"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              Math Royale is an Android game created by Farzaan Kaiyom and William La
            </ProjectCard>
            <ProjectCard
              title="Wolfram Demonstration Project"
              link="http://demonstrations.wolfram.com/ComparingTheRegionsOfPolarAndCartesianGraphs/"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              A tool I published to help visualize calculus concepts using Wolfram Mathematica.
            </ProjectCard>
            <ProjectCard
              title="This Website"
              link="http://github.com/farzaank/farzaank"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              The code for this website built using GatsbyJS boilerplate code.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <DividerTop
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-.1}
        offset={2}
        factor={2}
      />
      <Divider speed={0.1} offset={0.8} factor={2}>
      </Divider>
      <Content speed={0.4} offset={2.8}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Farzaan Kaiyom" />
            <AboutSub>
              I've always been in awe of the great impact of technology on people (both positive and negative). I'm interested in mitigating the negative effects, and using technology to solve societal problems. 
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            For example, as the social chair of Stanford Code the Change I led a community of likeminded engineers in making the world a better place. One project from there that I'm proud of is the Konexio interact platform, a matching platform for a non-profit in France that connects refugees to mentors. 
          </AboutDesc>
        </Inner>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-.1}
        offset={4}
        factor={1}
      />
      
      <Content speed={0.4} offset={4}>
        <Inner>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactText>
            <a href="mailto:fkaiyom@gmail.com">If you're interested in my work or want to chat, email me</a> or find me on other platforms:{' '}
            <a href="https://www.instagram.com/farzaank/">Instagram </a> &{' '}
            <a href="https://farzaank.com/debate.html">Calendy (for debate coaching)</a>
          </ContactText>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={4}>
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
