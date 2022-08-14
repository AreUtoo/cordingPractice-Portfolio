import { css } from '@emotion/react';
import Image from 'next/image';

const styles = {
  container: css`
    padding: 20px;
    display: flex;
    justify-content: space-between;
  `,
  list: css`
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  `,
  images: css`
    display: flex;
    align-items: center;
  `,
};

export const Header = () => (
  <header css={styles.container}>
    <div css={styles.images}>
      <a href='/'>
        <Image
          src='/images/logo.png'
          alt='ロゴ'
          href='/'
          width={142}
          height={42}
          layout='intrinsic'
        />
      </a>
    </div>
    <nav>
      <ul css={styles.list}>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Works</a>
        </li>
      </ul>
    </nav>
  </header>
);
