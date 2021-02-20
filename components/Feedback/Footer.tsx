import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  color: #999;
  text-align: center;
`;

type Props = {
  className?: string;
};

export const Footer: FC<Props> = (props) => (
  <Root className={props.className}>
    <div>
      <span>Miten 2021 © - </span>
      <a href="https://github.com/MitenHQ">Opensource software</a>
    </div>
    <div>"Miten" means "How" in Finnish</div>
  </Root>
);
