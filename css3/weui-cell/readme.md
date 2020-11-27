# css 的程序性

- BEM
Block weui-cell 项目名字 xl-

- stylus
    css有太多规则stylus是css的超集，可以编译成为css
        -省去了{:;} 高速度
        -stylus -w cell.styl -o cell.css
        写的是styl文件，html无法显示，
        -o 编译一下，cell.css 
        -w 边写边编译

- 弹性布局 flex
    1.弹性布局如何启用的呢？
    display:flex | inline | block | inline-block
    弹性布局设置在父元素上，启动了新的空间
    原有的盒子属性被打破了，
    .weui-cell(display:flex)>新的空间，原有块级能力被干掉
        .weui-cell__bd(flex:1 主元素)+.weui-cell__hd(辅元素)

- 伪元素
    css高级使用技巧，唯一一个可以在css中声明的html元素，箭头、边框等高级性能
    content 属性是必须的
    定位 position:relative position:absolute
    乾坤大挪移 手动移动 选中元素+上下键
