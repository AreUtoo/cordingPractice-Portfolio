import { css } from '@emotion/react';
import { colors } from '../constants/colors';
import { Header } from '../components/Header';
import { MainVisual } from '../components/MainVisual';

const style = css`
  background-color: ${colors.primary.main};
  padding: 20px;
`;

export default function Home() {
  return (
    <div>
      <Header />
      <MainVisual />
    </div>
  );
}
