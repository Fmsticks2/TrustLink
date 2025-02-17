import { useState } from 'react'

import redFlower from '../assets/redFlower.png'
import heroImg from '../assets/heroImg.png'
import leftFlower from '../assets/flower_left.png'
import rightFlower from '../assets/flower_right.png'
import heroImg2 from '../assets/hero2Img.png'
import Animator from '../assets/Animator.png'
import Graphics from '../assets/Graphics.png'
import Ux_design from '../assets/Ux_design.png'
import pinkFlowerleft from '../assets/Pink_flower_left.png'
import pinkFlowerRight from '../assets/Pink_flower_right.png'
import opportunity from '../assets/OpportunityImg.png'
import character from '../assets/Character.png'
import no_cost from '../assets/No_cost.png'
import safe from '../assets/Safe.png'
import userImg from '../assets/UserImg.png'
import userImg1 from '../assets/UserImg1.png'
import HeroSection from './dashboardComponent/HeroSection';
import FeaturesSection from './dashboardComponent/FeaturesSection';
import SkillsSection from './dashboardComponent/SkillsSection';
import WhyTrustLink from './dashboardComponent/WhyTrustLink';
import Testimonials from './dashboardComponent/Testimonials';
import OpportunitySection from './dashboardComponent/OpportunitySection';

const HomePage = () => {
  const [tab, setTab] = useState('design');

  const cardDetails = [
    {
      category: "design",
      title: "User Experience Designer",
      imgSrc: Ux_design,
      gradientFrom: "#4260da",
      gradientTo: "#253d9c",
      bgColor: "#3859BF",
    },
    {
      category: "design",
      title: "User Interface Designer",
      imgSrc: Graphics,
      gradientFrom: "#1F1F1F",
      gradientTo: "#292929",
      bgColor: "#373737",
    },
    {
      category: "development",
      title: "Graphics Designer",
      imgSrc: Graphics,
      gradientFrom: "#4260da",
      gradientTo: "#253d9c",
      bgColor: "#3859BF",
    },
    {
      category: "sales",
      title: "Animator",
      imgSrc: Animator,
      gradientFrom: "#1F1F1F",
      gradientTo: "#292929",
      bgColor: "#373737",
    },
    {
      category: "design",
      title: "User Experience Designer",
      imgSrc: Ux_design,
      gradientFrom: "#4260da",
      gradientTo: "#253d9c",
      bgColor: "#3859BF",
    },
    {
      category: "design",
      title: "User Interface Designer",
      imgSrc: Graphics,
      gradientFrom: "#1F1F1F",
      gradientTo: "#292929",
      bgColor: "#373737",
    },
    {
      category: "development",
      title: "Graphics Designer",
      imgSrc: Graphics,
      gradientFrom: "#4260da",
      gradientTo: "#253d9c",
      bgColor: "#3859BF",
    },
    {
      category: "sales",
      title: "Animator",
      imgSrc: Animator,
      gradientFrom: "#1F1F1F",
      gradientTo: "#292929",
      bgColor: "#373737",
    },
  ];

  const testimonials = [
    {
      image: userImg,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Sam Crockett',
      title: 'Independent Web Developer',    },
    {
      image: userImg1,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Jane Doe',
      title: 'Software Engineer',
    },
    {
      image: userImg,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Sam Crockett',
      title: 'Independent Web Developer',
    },
    {
      image: userImg1,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Jane Doe',
      title: 'Software Engineer',
    },
    {
      image: userImg,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Sam Crockett',
      title: 'Independent Web Developer',
    },
    {
      image: userImg1,
      quote: 'The freelance talent we work with are more productive than we ever thought possible. "The freelance talent we work with are more productive than."',
      name: 'Jane Doe',
      title: 'Software Engineer',
    },
  ];

  return (
    <div className="relative top-[90px] mb-20">
      <HeroSection redFlower={redFlower} heroImg={heroImg} />
      <FeaturesSection leftFlower={leftFlower} rightFlower={rightFlower} heroImg2={heroImg2} />
      <SkillsSection tab={tab} setTab={setTab} cardDetails={cardDetails} />
      <OpportunitySection pinkFlowerleft={pinkFlowerleft} opportunity={opportunity} pinkFlowerRight={pinkFlowerRight} />
      <WhyTrustLink character={character} no_cost={no_cost} safe={safe} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default HomePage;