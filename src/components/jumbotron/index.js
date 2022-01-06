import React from 'react';
import {
  SubTitle,
  Title,
  Pane,
  Item,
  Container,
  Inner,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumboContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumboPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumboTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumboSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumboImage({ ...restProps }) {
  return <Image {...restProps} />;
};
