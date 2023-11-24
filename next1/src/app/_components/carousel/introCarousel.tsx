'use client';

import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export default class IntroCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <Carousel>
                <Slider {...settings}>
                    <div>
                        <h3>안녕하세요, 프론트엔드 개발자 박예성입니다.</h3>
                    </div>
                    <div>
                        <h3>React를 기반으로 아래와 같은 기술을 다룹니다.</h3>
                        <p>React, NextJs, TypeScript, JavaScript, Redux, NodeJs, Express, MySQL, MongoDB, AWS EC2 </p>
                    </div>
                    <div>
                        <h3>부족한걸 알기에 끊임없이 성장하고 발전하기 위해 노력합니다. </h3>
                    </div>
                </Slider>
            </Carousel>
        );
    }
}

const Carousel = styled.div`
    width: 600px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
        text-align: center;
        height: 300px;
        display: flex;

        p {
            margin-top: 10px;
        }
        .slick-dots {
            top: 300px;
        }
        .slick-list {
            & > div > div {
                margin-top: 110px;
            }
        }
    }
`;
