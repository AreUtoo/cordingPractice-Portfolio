import {css} from '@emotion/react'

const hoge = css`
    background-color: #fafafa;
`


export default function Home() {
    return <div css={hoge}>テスト</div>;
}