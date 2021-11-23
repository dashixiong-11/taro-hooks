// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const BehanceSquareFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM598.5 350.9h138.4v33.7H598.5v-33.7zM512 628.8c-6.5 12.3-15.7 22.9-27 31-11.8 8.2-24.9 14.2-38.8 17.7-14.5 3.9-29.5 5.8-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5-11-11.9-19.6-25.9-25.1-41.2-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2 15.6 8.1 28.4 19.1 38.6 32.8 10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7z' fill='<%= color %>' /><path d='M668.8 480.4c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6-4.2 5.1-7.3 11.1-9.1 17.4-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7zM420.3 470.3c8.7-6.3 12.9-16.7 12.9-31 0.3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9-5.1-3.1-10.7-5.1-16.6-6-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1 0.1 24.2-3.1 32.9-9.5zM432.1 542.3c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-0.7 21.1-2.1s12.7-3.8 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

BehanceSquareFill.displayName = 'BehanceSquareFill';

BehanceSquareFill.defaultProps = {
  size: 18,
  style: {}
}

export default BehanceSquareFill;