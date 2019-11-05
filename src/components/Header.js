import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => ( //nombre del props entre {} aplicando destructuring
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);
//documentar tu proyecto de React
Header.protoTypes = {
    titulo : PropTypes.string.isRequired
}
export default Header;