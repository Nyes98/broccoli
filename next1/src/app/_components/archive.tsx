'use client';
import styled from 'styled-components';
import Image from 'next/image';

export default function Archive() {
    return (
        <ArchiveBox>
            <Title>
                Archive
                <TitleUnderLine></TitleUnderLine>
            </Title>
        </ArchiveBox>
    );
}

const ArchiveBox = styled.div``;

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
