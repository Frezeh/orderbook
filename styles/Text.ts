import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  regular?: boolean;
  mediumBold?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  subdued?: boolean;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
  unique?: boolean;
}

const Text = styled.p<Props>`
  font-size: 14px;

  ${(props) =>
    props.regular &&
    css`
      font-weight: 400;
      font-size: 16px;
    `};

  ${(props) =>
    props.mediumBold &&
    css`
      font-weight: 500;
    `};

  ${(props) =>
    props.semiBold &&
    css`
      font-weight: 600;
      font-size: 32px;
    `};

  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
      font-size: 36px;
    `};

  ${(props) =>
    props.small &&
    css`
      font-size: 1.2rem;
    `};

  ${(props) =>
    props.medium &&
    css`
      font-size: 1.6rem;
    `};

  ${(props) =>
    props.big &&
    css`
      font-size: 1.8rem;
    `};

  ${(props) =>
    props.unique &&
    css`
      font-weight: 600;
      font-size: 15px;
      color: #999CB4;
    `};
`;

export default Text;
