# 如何写Markdown

在本页您将学习到如何写markdown文件

## 标题

**输入**

````md
# 一级标题
## 二级标题
### 三级标题
...
````

最多可以有六级标题也就是六个#  
md符号和文字之间注意空格    
一份md文件建议使用一个一级标题，小标题使用二级标题    

**输出**

# 一级标题
## 二级标题
### 三级标题

## 加粗

**输入**

````md
**我是加粗**
````   

**输出**

**我是加粗**

## 高亮代码块


**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 了解更多
