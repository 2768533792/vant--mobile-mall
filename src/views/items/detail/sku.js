/* eslint-disable */
var _global = {
    "user_id": 4674509,
    "offline_id": 0,
    "activity_alias": "",
    "sku": {
        "tree": [{
            "k": "颜色",
            "k_id": "1",
            "v": [{
                "id": "30349",
                "name": "天蓝色",
                "imgUrl": "http://mamaqunaer.oss-cn-shanghai.aliyuncs.com/shop/269556/HMrynmRJJc.jpg"
            },{
                "id": "1215",
                "name": "红色",
                "imgUrl": "http://mm-test.img-cn-shanghai.aliyuncs.com/shop/448929/RmHJ6XZyT8.jpg"
            }],
            "k_s": "s1",
            "count": 2
        }, {
            "k": "尺寸",
            "k_id": "2",
            "v": [{
                "id": "1193",
                "name": "S"
            }, {
                "id": "1194",
                "name": "L"
            }],
            "k_s": "s2",
            "count": 2
        }],
        "list": [{
            "id": 2259, //SKU ID
            "price": 101, // 价格
            "s1": "1215", //规格一 ID
            "s2": "1193", //规格二 ID
            "s3": "0", // 规格三 ID  0表示不存在
            "stock_num": 110, //库存
            "goods_id": 946755,
						"sku_str": "红色,S" //props_str
        }, {
            "id": 2260,
            "price": 102,
            "s1": "1215",
            "s2": "1194",
            "s3": "0",
            "stock_num": 200,
            "goods_id": 946755,
						"sku_str": "红色,L"
        }, {
            "id": 2257,
            "price": 103,
            "s1": "30349",
            "s2": "1193",
            "s3": "0",
            "stock_num": 111,
            "goods_id": 946755,
						"sku_str": "天蓝色,S"
        }, {
            "id": 2258,
            "price": 300,
            "s1": "30349",
            "s2": "1194",
            "s3": "0",
            "stock_num": 6,
            "goods_id": 946755,
						"sku_str": "天蓝色,L"
        }],
        "price": "1.00", //未选择规格时的价格
        "stock_num": 227, //总库存
        "collection_id": 2261, //无规格商品skuId取collection_id，否则取所选sku组合对应的id
        "collection_price": 123,
        "none_sku": false, // 是否无规格商品
        "min_price": "1.00",
        "max_price": "3.00",
        "hide_stock": false
    },
    "goods_id": "946755", // 商品ID, 这个会在点击购物车和购买按钮事件上返回
    "quota": 15, //限购数量
    "is_virtual": "0",
    "quota_used": 0, //如果有限购数量, 就要加已经购买过的数量, 会自动判断能否购买
    "goods_info": {
        "title": "测试商品",
        "picture": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/03\/16\/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2\/2\/w\/100\/h\/100\/q\/75\/format\/jpg",
        "price": 1,
        "origin": ""
    }
};

export default _global;
