import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements';

const InfoSection = ({
    lightBg, 
    imgStart, 
    id, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    description2, 
    buttonLabel, 
    img, 
    video, // New video prop
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={1}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            {video ? 
                                (<video autoPlay loop muted style={{ width: '100%' }}>
                                    <source src={video} type="video/mp4" />
                                </video>) : 
                                (<Img src={img} alt={alt} />)
                            }
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
