<template>
    <v-chart :option='option'/>
</template>

<script>
import {reactive} from 'vue'

/*
    1.接入百度地图
    index.html  中引入js库
    2.使用百度地图的组件中加载模块
        import 'echarts/extension/bmap/bmap'
    3.绘制
 */
 import 'echarts/extension/bmap/bmap'

 const data = [
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 },
    { name: '盐城', value: 15 },
    { name: '赤峰', value: 16 },
    { name: '青岛', value: 18 },
    { name: '乳山', value: 18 },
    { name: '金昌', value: 19 },
    { name: '泉州', value: 21 },
    { name: '莱西', value: 21 },
    { name: '日照', value: 21 },
    { name: '胶南', value: 22 },
    { name: '南通', value: 23 },
    { name: '拉萨', value: 24 },
    { name: '云浮', value: 24 },
    { name: '梅州', value: 25 },
    { name: '文登', value: 25 },
    { name: '上海', value: 270 },
    { name: '攀枝花', value: 25 },
    { name: '威海', value: 25 },
    { name: '承德', value: 25 },
    { name: '厦门', value: 26 },
    { name: '汕尾', value: 26 },
    { name: '潮州', value: 26 },
    { name: '丹东', value: 27 },
    { name: '太仓', value: 27 },
    { name: '曲靖', value: 27 },
    { name: '烟台', value: 28 },
    { name: '福州', value: 29 },
    { name: '瓦房店', value: 30 },
    { name: '即墨', value: 30 },
    { name: '抚顺', value: 31 },
    { name: '玉溪', value: 31 },
    { name: '张家口', value: 31 },
    { name: '阳泉', value: 31 },
    { name: '莱州', value: 32 },
    { name: '湖州', value: 32 },
    { name: '汕头', value: 32 },
    { name: '昆山', value: 33 },
    { name: '宁波', value: 33 },
    { name: '湛江', value: 33 },
    { name: '揭阳', value: 34 },
    { name: '荣成', value: 34 },
    { name: '连云港', value: 35 },
    { name: '葫芦岛', value: 35 },
    { name: '常熟', value: 36 },
    { name: '东莞', value: 181 },
    { name: '河源', value: 36 },
    { name: '淮安', value: 36 },
    { name: '泰州', value: 36 },
    { name: '南宁', value: 37 },
    { name: '营口', value: 37 },
    { name: '惠州', value: 37 },
    { name: '江阴', value: 37 },
    { name: '蓬莱', value: 37 },
    { name: '韶关', value: 38 },
    { name: '嘉峪关', value: 38 },
    { name: '广州', value: 209 },
    { name: '延安', value: 38 },
    { name: '太原', value: 239 },
    { name: '清远', value: 39 },
    { name: '中山', value: 39 },
    { name: '昆明', value: 39 },
    { name: '寿光', value: 40 },
    { name: '盘锦', value: 40 },
    { name: '长治', value: 41 },
    { name: '深圳', value: 241 },
    { name: '珠海', value: 42 },
    { name: '宿迁', value: 43 },
    { name: '咸阳', value: 43 },
    { name: '铜川', value: 44 },
    { name: '平度', value: 44 },
    { name: '佛山', value: 44 },
    { name: '海口', value: 44 },
    { name: '江门', value: 45 },
    { name: '章丘', value: 45 },
    { name: '肇庆', value: 46 },
    { name: '大连', value: 47 },
    { name: '临汾', value: 47 },
    { name: '吴江', value: 47 },
    { name: '石嘴山', value: 49 },
    { name: '沈阳', value: 50 },
    { name: '苏州', value: 50 },
    { name: '茂名', value: 50 },
    { name: '嘉兴', value: 51 },
    { name: '长春', value: 51 },
    { name: '胶州', value: 52 },
    { name: '银川', value: 52 },
    { name: '张家港', value: 52 },
    { name: '三门峡', value: 53 },
    { name: '锦州', value: 54 },
    { name: '南昌', value: 54 },
    { name: '柳州', value: 54 },
    { name: '三亚', value: 54 },
    { name: '自贡', value: 56 },
    { name: '吉林', value: 56 },
    { name: '阳江', value: 57 },
    { name: '泸州', value: 57 },
    { name: '西宁', value: 57 },
    { name: '宜宾', value: 58 },
    { name: '呼和浩特', value: 58 },
    { name: '成都', value: 58 },
    { name: '大同', value: 58 },
    { name: '镇江', value: 59 },
    { name: '桂林', value: 59 },
    { name: '张家界', value: 59 },
    { name: '宜兴', value: 59 },
    { name: '北海', value: 60 },
    { name: '西安', value: 191 },
    { name: '金坛', value: 62 },
    { name: '东营', value: 62 },
    { name: '牡丹江', value: 63 },
    { name: '遵义', value: 63 },
    { name: '绍兴', value: 63 },
    { name: '扬州', value: 64 },
    { name: '常州', value: 64 },
    { name: '潍坊', value: 65 },
    { name: '重庆', value: 66 },
    { name: '台州', value: 67 },
    { name: '南京', value: 180 },
    { name: '滨州', value: 70 },
    { name: '贵阳', value: 71 },
    { name: '无锡', value: 71 },
    { name: '本溪', value: 71 },
    { name: '克拉玛依', value: 72 },
    { name: '渭南', value: 72 },
    { name: '马鞍山', value: 72 },
    { name: '宝鸡', value: 72 },
    { name: '焦作', value: 75 },
    { name: '句容', value: 75 },
    { name: '北京', value: 220 },
    { name: '徐州', value: 79 },
    { name: '衡水', value: 80 },
    { name: '包头', value: 80 },
    { name: '绵阳', value: 80 },
    { name: '乌鲁木齐', value: 84 },
    { name: '枣庄', value: 84 },
    { name: '杭州', value: 84 },
    { name: '淄博', value: 85 },
    { name: '鞍山', value: 86 },
    { name: '溧阳', value: 86 },
    { name: '库尔勒', value: 86 },
    { name: '安阳', value: 90 },
    { name: '开封', value: 90 },
    { name: '济南', value: 92 },
    { name: '德阳', value: 93 },
    { name: '温州', value: 95 },
    { name: '九江', value: 96 },
    { name: '邯郸', value: 98 },
    { name: '临安', value: 99 },
    { name: '兰州', value: 99 },
    { name: '沧州', value: 100 },
    { name: '临沂', value: 103 },
    { name: '南充', value: 104 },
    { name: '天津', value: 105 },
    { name: '富阳', value: 106 },
    { name: '泰安', value: 112 },
    { name: '诸暨', value: 105},
 ]
const coordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
}

const normrlize = (data,coordMap)=>{
    const newData = []
    data.map(item=>{
        newData.push({
            name:item.name,
            value:[...coordMap[item.name],item.value]
        })
    })
    return newData
}
normrlize(data,coordMap)
export default {
    setup(){
        const option = reactive({
            title:{
                text:'销售大屏统计',
                subtext:'2021-07-06',
                left:'center',
            },
            tooltip:{},
            bmap:{
                key:'OjHNktiMLCF6c1zaoHeRrUBZbwyoMfGS',
                center:[112.552703,37.879147],  //经纬度
                zoom:5,
                roam:false, //停止交互
                mapStyle:{
                    styleJson:[{
                        "featureType": "land",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#f5f6f7ff"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#c4d7f5ff"
                        }
                    }, {
                        "featureType": "green",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#dcf2d5ff"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffe59eff"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#f5d48cff"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#fff6ccff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#fff6ccff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#fff6ccff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#fff6ccff"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#f2dc9dff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#f2dc9dff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#f2dc9dff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#f2dc9dff"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.sidefill",
                        "stylers": {
                            "color": "#e6ebf0ff"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.topfill",
                        "stylers": {
                            "color": "#e6ebf0ff"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#d8e2ebff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "scenicspotsway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "scenicspotsway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "universityway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "universityway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "vacationway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#dfe4ebff"
                        }
                    }, {
                        "featureType": "vacationway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 18
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "town",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#c0792dff"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#c0792dff"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff60"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#c0792dff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#c0792dff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#c0792dff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "companylabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "companylabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "companylabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "lifeservicelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "lifeservicelabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "lifeservicelabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "carservicelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "carservicelabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "carservicelabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "financelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "financelabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "financelabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "companylabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "lifeservicelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "carservicelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "financelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#f5f6f7ff"
                        }
                    }, {
                        "featureType": "subway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "12"
                        }
                    }, {
                        "featureType": "subway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "12"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "railway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "10"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "11"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "12"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "13"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "14"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "15"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "10"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "11"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "12"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "13"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "14"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "15"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "10"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "11"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "12"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "13"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "14"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "10,15",
                            "level": "15"
                        }
                    }, {
                        "featureType": "district",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "district",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "city",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "continent",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#a77726ff"
                        }
                    }, {
                        "featureType": "continent",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "12"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "12"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "12"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "estatelabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "estatelabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "businesstowerlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "13"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "14"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "15"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "16"
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,17",
                            "level": "17"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "13"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "14"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "15"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "16"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "17"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "18"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "13"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "14"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "15"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "16"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "17"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "18"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "13"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "14"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "15"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "16"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "17"
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "13,18",
                            "level": "18"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 22,
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 22,
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 22,
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "14,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "11"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "11"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "11"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "12"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "13"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "14"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "15"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,16",
                            "level": "16"
                        }
                    }, {
                        "featureType": "shoppinglabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "hotellabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "restaurantlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "governmentlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "companylabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }, {
                        "featureType": "entertainmentlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "medicallabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "airportlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#9ca0a3ff"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "education",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "12"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "12"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "12"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "12,13",
                            "level": "13"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "11"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "12"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "13"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "14"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "11"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "12"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "13"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "14"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "11"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "12"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "13"
                        }
                    }, {
                        "featureType": "educationlabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "11,14",
                            "level": "14"
                        }
                    }, {
                        "featureType": "transportationlabel",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }, {
                        "featureType": "scenicspots",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#ab76b6ff"
                        }
                    }, {
                        "featureType": "scenicspots",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 23
                        }
                    }]
                }
            },
            series:[
                {
                    name:'销售额',
                    type:'scatter', //散点
                    coordinateSystem:'bmap',   //使用哪个坐标系统绘图
                    data:normrlize(data.sort((a,b)=>{
                        return b.value-a.value
                    }),coordMap).slice(0,10),
                    encode:{
                        value:2
                    },
                    itemStyle:{
                        color:'purple'
                    },
                    symbolSize:(value)=>{
                        return value[2] /5
                    },
                    label:{
                        show:false,
                        position:'right',
                        formtter:val=> `${val.data.name} - ${val.value[2]}`
                        
                    },
                    emphasis:{
                        label:{show:true}
                    }
                },
                {
                    name:'top 10',
                    type:'scatter', //散点
                    coordinateSystem:'bmap',   //使用哪个坐标系统绘图
                    data:normrlize(data,coordMap),
                    encode:{
                        value:2
                    },
                    itemStyle:{
                        color:'purple'
                    },
                    symbolSize:(value)=>{
                        return value[2] /5
                    },
                    label:{
                        show:false,
                        position:'right',
                        formtter:val=> `${val.data.name} - ${val.value[2]}`
                        
                    },
                    //强调
                    emphasis:{
                        label:{
                            show:true
                        }
                    },
                    rippleEffect:{
                        brushType:'stroke',//stroke(涟漪)和fill(扩散) 两种效果
                    },
                }
            ]
        })
        return{
            option
        }
    }
}
</script>

<style>
.anchorBL{
    display:none;
}
</style>