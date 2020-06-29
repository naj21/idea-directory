import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class RoundedCards extends Component {
  render() {
    const Card = styled.div`
      position: absolute;
      width: 344px;
      height: 60px;
      left: 50px;
      top: 105px;
      background: #ffffff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    `;

    const Text = styled.p`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 15px;
      padding-left: 30px;

      color: rgba(0, 0, 0, 0.5);
    `;

    return (
      <Card>
        <Text> You are a very fine man </Text>
      </Card>
    );
  }
}
