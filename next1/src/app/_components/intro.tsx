'use client';
import styled from 'styled-components';
import Image from 'next/image';
import IntroCarousel from './carousel/introCarousel';

export default function Intro() {
    return (
        <IntroBox>
            <IntroBG>
                <Image src="/main.jpg" fill={true} alt="intro"></Image>
                <IntroCarousel />
            </IntroBG>
        </IntroBox>
    );
}

const IntroBox = styled.div``;

const IntroBG = styled.div`
    position: relative;
    height: 600px;
`;
