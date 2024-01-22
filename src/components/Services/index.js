import React from 'react';
import Icon1 from '../../images/hydrovactruck.png';
import Icon2 from '../../images/marineassetretrieval.png';
import Icon3 from '../../images/pipelineservices.jpeg';
import level1 from '../../images/level1.png';
import level2 from '../../images/level2.png';
import level3 from '../../images/level3.png';
import Icon4 from '../../images/firstaid.jpeg';
import Icon5 from '../../images/streetsweeper.png';
import Icon6 from '../../images/environmentaltruck.png';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP 
        } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>The Levels</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={level1} />
                    <ServicesH2>Level 1</ServicesH2>
                    <ServicesP>Dive into the adrenaline-pumping world of racing on your Apple Watch with our game's first level, where you navigate through dynamic obstacles and collect coins to boost your score. Utilize power-ups and manage your speed wisely to survive the challenging track and aim for the high score, all within an immersive and engaging gameplay experience .</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={level2} />
                    <ServicesH2>Level 2</ServicesH2>
                    <ServicesP>Navigate your way through the twisty turns and unexpected puddles of our second level, designed to test your reflexes and strategy on the slippery road. Collect coins, dodge dynamically generated obstacles, and utilize power-ups wisely to survive the ever-changing conditions and advance your score in this thrilling level tailored for the Apple Watch.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={level3} />
                    <ServicesH2>Level 3</ServicesH2>
                    <ServicesP>Dive into the third level of our action-packed racing game on the Apple Watch, where you'll face an onslaught of new challenges including faster obstacle generation and more frequent puddles to test your agility. Collect coins, navigate through increasingly complex tracks, and utilize strategic power-ups to boost your score and survive the thrilling rain-drenched roads.</ServicesP>
                </ServicesCard>
		
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
