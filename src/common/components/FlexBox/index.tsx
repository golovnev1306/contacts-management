import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import type { Property } from 'csstype';

type FlexBoxProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  align?: Property.AlignItems
  justify?: Property.JustifyContent
  gap?: Property.Gap
  direction?: Property.FlexDirection
}

const FlexBox: FC<FlexBoxProps> = ({
  children,
  gap = 10,
  align,
  justify,
  direction,
  ...props
}) => {
  const styleProp = {
    display: 'flex',
    gap: gap,
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
  } as CSSProperties;

  const resultProps = {
    ...props,
    style: Object.assign(styleProp, props.style),
  }
  return (
    <div {...resultProps}>{ children }</div>
  )
}

export default FlexBox;