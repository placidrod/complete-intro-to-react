import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = ({ title, poster, year, description }) => (
  <Wrapper>
    <Image alt={`${title} Show Poster`} src={`/public/img/posters/${poster}`} />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  // show: shape({
  title: string.isRequired,
  poster: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
  // }).isRequired
};

export default ShowCard;
