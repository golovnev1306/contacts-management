import React, { FC } from 'react';
import { Button, ButtonProps, Tooltip } from 'antd';

type ButtonWithTooltipProps = ButtonProps & {
  title: string
}

const ButtonWithTooltip: FC<ButtonWithTooltipProps> = ({title, ...buttonProps}) => {
  return (
    <Tooltip title={title} mouseLeaveDelay={0}>
      <Button
        shape={'circle'}
        size={'middle'}
        {...buttonProps}
      />
    </Tooltip>
  )
}

export default ButtonWithTooltip;