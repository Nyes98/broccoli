'use client';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderBox>
            <div>Nyes's portfolio</div>
            <HeaderMenu>
                <div>About Me</div>
                <div>Skill</div>
                <div>Archive</div>
                <div>Projects</div>
            </HeaderMenu>
        </HeaderBox>
    );
}

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    border-bottom: 1px solid black;
    color: white;

    div {
        display: flex;
    }

    background-color: #343a40;
`;

const HeaderMenu = styled.div`
    display: flex;

    div {
        padding: 0px 8px;
    }
`;
