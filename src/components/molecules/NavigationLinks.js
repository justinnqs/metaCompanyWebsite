import React from "react";
import styled from "styled-components";

const NavigationLinkContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const NavigationLinks = (props) => (
    <NavigationLinkContainer>
        {props.children}
    </NavigationLinkContainer>
)