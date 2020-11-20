# TwoSum leetcode 腾讯必考题

1.node 安装

- node 是让 JS 运行在服务器端的环境
    开发速度更快，但没有java那么稳定
    Server Linux pwd当前位置
    node 1.js


- 读题
    给定一个整数数组 nums,targer 参数
    返回下标
    const nums=[3,4,8,6]

- 前期leetcode刷题 先暴力 再调优 easy
    1.时间复杂度
        双重循环花的时间很多 o(n*n)
    2.空间复杂度

- 提供一个算法
    o(n*n) -> o(n) 空间多花
    找一种合适的数据结构
    Array 也是最基本的数据结构 是一个数据集合 数字索引，空间是连续的
    JSON Object 对象字面量 也是一个数据集合 在C里没有原生的， HashMap