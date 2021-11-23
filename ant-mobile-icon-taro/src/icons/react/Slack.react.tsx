// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Slack: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ?  (size + 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M925.5 541.9c-12.2-37.6-52.6-58.1-90.1-45.9l-80 26L703 360.9l80-26c37.6-12.2 58.1-52.6 45.9-90.1-12.2-37.6-52.6-58.1-90.1-45.9l-80 26-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9-37.5 12.2-58.1 52.6-45.9 90.1l26.2 80.6-161.1 52.4-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9s-58.1 52.6-45.9 90.1l26.2 80.6-81.1 26.4c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 52.4 161.1-81.3 26.3c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26.2-80.6 161.1-52.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26-80.5 80-26c37.5-12.1 58.1-52.5 45.9-90.1z m-467.3 76.7l-52.4-161.1L567 405.1l52.4 161.1-161.2 52.4z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Slack.displayName = 'Slack';

Slack.defaultProps = {
  size: 18,
  style: {}
}

export default Slack;