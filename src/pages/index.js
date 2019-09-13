import React from "react";
import { NavBarLink } from "../components/atoms/Links";
import { FontStyle } from "../components/atoms/FontStyle";
import { NavigationLinks } from "../components/molecules/NavigationLinks";

export default () => (
    <React.Fragment>
        <FontStyle />
        <NavigationLinks>
            <NavBarLink>Home</NavBarLink>
            <NavBarLink>About</NavBarLink>
            <NavBarLink>Team</NavBarLink>
            <NavBarLink>Jobs</NavBarLink>
        </NavigationLinks>
    </React.Fragment>
)
