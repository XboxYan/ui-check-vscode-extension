# ui-check

这是一个HTML边界检测生成工具

## Features

很多情况下，HTML原型都是最完美的状态，对于文字过多或者为空，图片尺寸大小等可能并没有做相关的设定

该插会件生成test目录，里面包含两个文件夹，分别是`empty`、`overflow`，如下

```
./test                 -> test生成目录
  |--empty             -> 文本内容为空、图片为空的情况
  |--overflow          -> 文本内容很多、图片资源随机的情况
```

> 提示：目前仅适用于HTML，对于js动态生成的不会去检测

## Usage

安装完以后左下角会出现`ui-check`的按钮

![ui-check](https://imgservices-1252317822.image.myqcloud.com/image/20200701/dur6hskjs4.jpg)

点击该按钮，编辑器顶部会出现输入框，输入所需要检测目录，默认为`./dist/`

![ui-input](https://imgservices-1252317822.image.myqcloud.com/image/20200701/pl1875wydr.jpg)

回车`Enter`，会自动生成`/test`目录(暂不能修改)，同时提示“目录test生成完成”

![tips](https://imgservices-1252317822.image.myqcloud.com/image/20200701/oys3g51jok.jpg)

如果输入目录不存在，则会提示错误

![error](https://imgservices-1252317822.image.myqcloud.com/image/20200701/9t49myo3t2.jpg)

## ScreenShot

|**原始页面**|**文本内容为空、图片为空的情况**|**文本内容很多、图片资源随机的情况**|
|----|----|----|
|![原始页面](https://imgservices-1252317822.image.myqcloud.com/image/20200701/cms5zwh816.jpg)|![文本内容为空、图片为空的情况](https://imgservices-1252317822.image.myqcloud.com/image/20200701/k4k0wuhtkh.jpg)|![文本内容很多、图片资源随机的情况](https://imgservices-1252317822.image.myqcloud.com/image/20200701/km4l73m1y8.jpg)|


各种极限情况一目了然

**Enjoy!**
