'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Skill() {
    return (
        <SkillBox>
            <Title>
                SKILLS
                <TitleUnderLine></TitleUnderLine>
            </Title>
            <DetailBox>
                <div>
                    <div>
                        <div>FrontEnd</div>
                        <Image src="/frontend.png" width={300} height={700} alt="frontend"></Image>
                    </div>
                </div>
                <div>
                    <div>
                        <div>BackEnd</div>
                        <Image src="/backend.png" width={300} height={300} alt="backend"></Image>
                    </div>
                    <div>
                        <div>Deployment</div>
                        <Image src="/deployment.png" width={300} height={250} alt="deployment"></Image>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Communication</div>
                        <Image src="/communication.png" width={300} height={400} alt="communication"></Image>
                    </div>
                    <div>
                        <div>Version Control</div>
                        <Image src="/version-control.png" width={300} height={200} alt="control"></Image>
                    </div>
                </div>
            </DetailBox>
        </SkillBox>
    );
}

const SkillBox = styled.div`
    background-color: #f5f5f5;
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
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin: auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-around;

    div > div {
        width: 340px;
        box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, 0.2);
        margin-bottom: 20px;
        border-radius: 30px;
        background-color: white;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.05);
        }
    }

    div > div > div {
        box-shadow: none;
        border: 3px solid black;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`;
