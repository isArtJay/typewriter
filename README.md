# typewriter

js实现的简单打字机效果

[在线Demo](<https://www.lien.run/Project/typewriter/>)



# 用法示例

首先把 CSS 和 JS 文件放到相应的目录下，然后在 HTML 文件里分别引入这两个文件：

CSS：

```html
<link href="typewriter.css" rel="stylesheet">
```

JS：

```html
<script src="typewriter.js"></script>
```



在需要放置的地方插入下面这行：

```html
<span id="words"></span><span id="cursor">|</span>
```



最后在末尾设置你要定义的字段和相关的设置。首先你需要定义一个数组，然后写入单个或多个字段：

```html
<script>
  var strings = new Array("文段1", "文段2") ; 
  var typingSpeed = 100; // 打出每个字的间隔时间
  var deleteSpeed = 40; // 删除每个字的间隔时间
  var isLoop = true; // 是否循环，true/false
  var waitTime = 800; // 打完一个字段后的等待时间
</script>
```

