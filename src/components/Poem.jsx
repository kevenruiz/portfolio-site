import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Poem = ({ id, title, body, dedication, date, time }) => {
  return <section>
    <Link to={`/poem/${id}`}>
      <p>Title: {title}</p></Link>
    <p>Body: {body}</p>
    <p>Dedication: {dedication}</p>
    <p>Date: {date}</p>
    <p>Time: {time}</p>
  </section>
};
Poem.propType = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  dedication: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string

};