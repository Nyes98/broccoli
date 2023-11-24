'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function AboutMe() {
    return (
        <AboutBox>
            <Title>
                ABOUT
                <TitleUnderLine></TitleUnderLine>
            </Title>

            <DetailBox>
                <div>
                    <div>
                        <Image src="/name.svg" width={30} height={30} alt="name"></Image>
                    </div>
                    <div>박예성</div>
                </div>
                <div>
                    <div>
                        <Image src="/birth.svg" width={30} height={30} alt="birth"></Image>
                    </div>
                    <div>98.09.24</div>
                </div>
                <div>
                    <div>
                        <Image src="/phone.svg" width={30} height={30} alt="phone"></Image>
                    </div>
                    <div>010-5503-9839</div>
                    <div>nyesg98@gmail.com</div>
                </div>
                <div>
                    <div>
                        <Image src="/address.svg" width={30} height={30} alt="address"></Image>
                    </div>
                    <div>경기도 남양주시</div>
                </div>
            </DetailBox>
        </AboutBox>
    );
}

const AboutBox = styled.div`
    max-width: 1100px;
    margin: 80px auto 180px auto;
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 100px;
`;
const TitleUnderLine = styled.div`
    position: absolute;
    width: 70px;
    border: solid 2px black;
    top: 65px;
`;

const DetailBox = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-weight: 700;

    div {
        width: 150px;
        margin: auto;
    }

    div > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: #f566a2;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        margin-bottom: 20px;
    }
`;
