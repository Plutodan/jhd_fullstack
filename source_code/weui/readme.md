# 源码分析


## 国际化的命名规范 BEM
### BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论，是一种 CSS命名规范
1.今天会取名，明天
    取类名
    - .weui-btn
        btn 组件名 70%都是由框架提供的，基础类
        weui项目前缀 tb tm 项目组 项目前缀可以在多个项目中起区分作用
2.CSS知识点
    - 元素分为行内元素和块级元素 inline block inline-block
    - 元素在页面上的占位，由 内容(wh) padding border margin position 盒子模型
3.面向对象的CSS
    - 一个元素有多个类
        .weui-btn Block 基础类
        .weui-btn_primary Modifier 多态
4.npm i -g live-server
    live-server web服务器
    安装一个插件
    node js 的后端
5.结构
    结构套路 适用于移动端页面 超越项目
    .page>.page__hd+.page__bd
    weui项目组 
    BEM 搭积木 
    Block 块
    Element 子元素 __
    Modifier 装饰(状态) _
