import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function  fromatName(user) {
    return user.firstName + ' ' + user.lastName;
};
const user =  {
    firstName : 'Abdullah',
    lastName : 'Yaser'
}; 
const element = (
    <h1>
        Hello, {fromatName(user)}!
    </h1>
);
ReactDOM.render (
    element,
    document.getElementById('root')
);
