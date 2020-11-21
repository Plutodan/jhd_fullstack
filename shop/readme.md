# skr-shop 抖音电商

## 订单功能

### 模块化
    - 地址表
        设计这个表？
        需求
        consignee 收货人姓名 string
        mobile string 手机
        mongodb  JSON Object 存进去
        {
            id: 86,
            name: '中国'，
        }
        country  object id   int64  国家ID
        country  object name string 国家名称
        province object id   int64  省ID
        province object name string 省名称
        city     object id   int64  城市ID
        city     object name string 城市名称
        county
        street
        detailed_address 用户自填
        postal_code string 邮政编码 
        address_id 地址ID int64
        时间戳 + 随机数4位
