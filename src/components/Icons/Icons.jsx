// import React, { Component } from 'react';
import IconsSVG from './icons.svg';
import css from '../Searchbar/Searchbar.module.css';

export const Icons = ({ name }) => {
  return (
    <svg className={css.icon_search}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
