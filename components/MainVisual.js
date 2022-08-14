import { css } from '@emotion/react';
import { colors } from '../constants/colors';
// import Image from 'next/image';

const styles = {
  container: css`
    background-image: url('/images/mainvisual.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  text: css`
    font-size: 92px;
    color: ${colors.primary.main};
  `,
};

export const MainVisual = () => (
  <div css={styles.container}>
    <h1 css={styles.text}>Ayuto Portfolio</h1>
  </div>
);
