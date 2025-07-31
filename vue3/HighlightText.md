## 高亮搜索的文字

```vue
<template>
  <span v-html="highlightedText"></span>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    /**
     * 要高亮的文本内容
     */
    text: string;

    /**
     * 要高亮的关键词
     */
    keyword: string;

    /**
     * 高亮的颜色
     * @default "#f56c6c"
     */
    highlightColor?: string;

    /**
     * 高亮的背景色
     * @default "transparent"
     */
    highlightBgColor?: string;

    /**
     * 是否使用粗体
     * @default false
     */
    bold?: boolean;

    /**
     * 是否区分大小写
     * @default false
     */
    caseSensitive?: boolean;

    /**
     * 自定义高亮的CSS类名
     */
    customClass?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    highlightColor: '#f56c6c',
    highlightBgColor: 'transparent',
    bold: false,
    caseSensitive: false,
    customClass: '',
  });

  // 生成高亮样式
  const highlightStyle = computed(() => {
    const styles = [
      `color: ${props.highlightColor}`,
      `background-color: ${props.highlightBgColor}`,
      'padding: 0 2px',
      'border-radius: 2px',
    ];

    if (props.bold) {
      styles.push('font-weight: bold');
    }

    return styles.join(';');
  });

  // 生成高亮的HTML
  const highlightedText = computed(() => {
    if (!props.text || !props.keyword) {
      return props.text || '';
    }
    // 简单文本替换
    const flags = props.caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(`(${escapeRegExp(props.keyword)})`, flags);

    if (props.customClass) {
      return props.text.replace(regex, `<span class="${props.customClass}">$1</span>`);
    } else {
      return props.text.replace(regex, `<span style="${highlightStyle.value}">$1</span>`);
    }
  });

  // 转义正则表达式特殊字符
  function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
</script>

```