import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { styled } from 'styled-components'



const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 1rem 0;
`
const StyledHead = styled.div<{$open: boolean}>`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
width: 100%;
cursor: pointer;
border-bottom: ${props => props.$open ? "none" : "1px solid black"};


`

const StyledH2 = styled.h2`
font-family: "Bebas Neue";
`

const StyledP = styled.p<{$open: boolean}>`
display: ${props => props.$open ? "block" : "none"};
  border-bottom: 1px solid black;
  padding: 1rem;
  font-size: 1.5rem;
`;
export const InfoBox = ({title, content, defaultOpen = false}:{title: string, content: string, defaultOpen?: boolean}) => {

    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)

  return (
    <StyledDiv >
        <StyledHead $open={isOpen}onClick={() => setIsOpen(!isOpen)}>
            <StyledH2>{title}</StyledH2>
            {isOpen ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
        </StyledHead>
        <StyledP $open={isOpen}>{content}</StyledP>

    </StyledDiv>
  )
}
