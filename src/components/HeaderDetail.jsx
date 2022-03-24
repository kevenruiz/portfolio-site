import React from 'react';
import { Link } from 'react-router-dom';


const HeaderDetail = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/create">Make a Poem</Link>
    <h1>Your Poem Archives</h1>
  </div>

);

export default HeaderDetail