
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const FileGIF: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M551.5 490.5H521c-4.6 0-8.4 3.7-8.4 8.4V720c0 4.6 3.7 8.4 8.4 8.4h30.5c4.6 0 8.4-3.7 8.4-8.4V498.9c-0.1-4.6-3.8-8.4-8.4-8.4zM477.3 600h-88.1c-4.6 0-8.4 3.7-8.4 8.4v23.8c0 4.6 3.7 8.4 8.4 8.4h47.6v0.7c-0.6 29.9-23 49.8-56.5 49.8-39.2 0-63.6-30.7-63.6-81.4 0-50.1 23.9-80.6 62.3-80.6 28.1 0 47.5 13.5 55.4 38.3l0.9 2.8h49.2l-0.7-4.6C475.9 515.9 434.7 484 379 484c-68.8 0-113 49.4-113 125.9 0 77.5 43.7 126.1 113.6 126.1 64.4 0 106-40.3 106-102.9v-24.8c0-4.6-3.7-8.3-8.3-8.3z' fill='<%= color %>' /><path d='M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216c0 23.2 18.8 42 42 42h216v494z' fill='<%= color %>' /><path d='M608.2 727.8h32.3c4.6 0 8.4-3.7 8.4-8.4v-84.8h87.8c4.6 0 8.4-3.7 8.4-8.4v-25.5c0-4.6-3.7-8.4-8.4-8.4h-87.8v-58.9h96.8c4.6 0 8.4-3.7 8.4-8.4v-26.8c0-4.6-3.7-8.4-8.4-8.4H608.2c-4.6 0-8.4 3.7-8.4 8.4v221.1c0 4.8 3.8 8.5 8.4 8.5z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

FileGIF.displayName = 'FileGIF';

FileGIF.defaultProps = {
  size: 18,
  style: {}
}

export default FileGIF;
