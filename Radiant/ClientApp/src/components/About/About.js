import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const About = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
            >
                About
      </DropdownToggle>
            <DropdownMenu>
                <div onClick={toggle}>Introduction</div>
                <div onClick={toggle}>Mission</div>
                <div onClick={toggle}>Vision</div>
            </DropdownMenu>
        </Dropdown>
    );
}

export default About