
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'Codepen',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size = 18,
        style = {},
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M911.7 385.3l-0.3-1.5c-0.2-1-0.3-1.9-0.6-2.9-0.2-0.6-0.4-1.1-0.5-1.7-0.3-0.8-0.5-1.7-0.9-2.5-0.2-0.6-0.5-1.1-0.8-1.7-0.4-0.8-0.8-1.5-1.2-2.3-0.3-0.5-0.6-1.1-1-1.6-0.8-1.2-1.7-2.4-2.6-3.6-0.5-0.6-1.1-1.3-1.7-1.9-0.4-0.5-0.9-0.9-1.4-1.3-0.6-0.6-1.3-1.1-1.9-1.6-0.5-0.4-1-0.8-1.6-1.2-0.2-0.1-0.4-0.3-0.6-0.4L531.1 117.8c-11.5-7.7-26.6-7.7-38.1 0L127.3 361.3c-0.2 0.1-0.4 0.3-0.6 0.4-0.5 0.4-1 0.8-1.6 1.2-0.7 0.5-1.3 1.1-1.9 1.6-0.5 0.4-0.9 0.9-1.4 1.3-0.6 0.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-0.3 0.5-0.7 1-1 1.6-0.4 0.7-0.8 1.5-1.2 2.3-0.3 0.5-0.5 1.1-0.8 1.7-0.3 0.8-0.6 1.7-0.9 2.5-0.2 0.6-0.4 1.1-0.5 1.7-0.2 0.9-0.4 1.9-0.6 2.9l-0.3 1.5c-0.2 1.5-0.3 3-0.3 4.5v243.5c0 1.5 0.1 3 0.3 4.5l0.3 1.5c0.2 1 0.4 1.9 0.6 2.9 0.2 0.6 0.3 1.1 0.5 1.7 0.3 0.9 0.6 1.7 0.9 2.5 0.2 0.6 0.5 1.1 0.8 1.7 0.4 0.8 0.7 1.5 1.2 2.3 0.3 0.5 0.6 1.1 1 1.6 0.5 0.7 0.9 1.4 1.5 2.1l1.2 1.5c0.5 0.6 1.1 1.3 1.7 1.9 0.4 0.5 0.9 0.9 1.4 1.3 0.6 0.6 1.3 1.1 1.9 1.6 0.5 0.4 1 0.8 1.6 1.2 0.2 0.1 0.4 0.3 0.6 0.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c0.2-0.1 0.4-0.3 0.6-0.4 0.5-0.4 1-0.8 1.6-1.2 0.7-0.5 1.3-1.1 1.9-1.6 0.5-0.4 0.9-0.9 1.4-1.3 0.6-0.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c0.3-0.5 0.7-1 1-1.6 0.4-0.8 0.8-1.5 1.2-2.3 0.3-0.5 0.5-1.1 0.8-1.7 0.3-0.8 0.6-1.7 0.9-2.5 0.2-0.5 0.4-1.1 0.5-1.7 0.3-0.9 0.4-1.9 0.6-2.9l0.3-1.5c0.2-1.5 0.3-3 0.3-4.5V389.8c-0.3-1.5-0.4-3-0.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5z m-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115z m296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8z m34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <Text onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})
