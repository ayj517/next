const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });


const list = {
    subjects: [
    {
    rate: "6.1",
    cover_x: 1500,
    title: "福尔摩斯小姐：失踪的侯爵",
    url: "https://movie.douban.com/subject/27662541/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2617666143.webp",
    id: "27662541",
    cover_y: 2222,
    is_new: false
    },
    {
    rate: "6.9",
    cover_x: 1080,
    title: "神弃之地",
    url: "https://movie.douban.com/subject/27194336/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2619322729.webp",
    id: "27194336",
    cover_y: 1920,
    is_new: false
    },
    {
    rate: "7.3",
    cover_x: 701,
    title: "杀掉它，然后离开这个小镇",
    url: "https://movie.douban.com/subject/34952351/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2585107469.webp",
    id: "34952351",
    cover_y: 1000,
    is_new: true
    },
    {
    rate: "8.9",
    cover_x: 716,
    title: "悲惨世界：上演音乐会",
    url: "https://movie.douban.com/subject/34892489/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574521473.webp",
    id: "34892489",
    cover_y: 1075,
    is_new: true
    },
    {
    rate: "7.3",
    cover_x: 1070,
    title: "假如爱有天意",
    url: "https://movie.douban.com/subject/32579297/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578940720.webp",
    id: "32579297",
    cover_y: 1529,
    is_new: true
    },
    {
    rate: "7.2",
    cover_x: 1400,
    title: "从邪恶中拯救我",
    url: "https://movie.douban.com/subject/30425219/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2612814747.webp",
    id: "30425219",
    cover_y: 1998,
    is_new: false
    },
    {
    rate: "8.2",
    cover_x: 1456,
    title: "鸣鸟不飞：乌云密布",
    url: "https://movie.douban.com/subject/33425932/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2586787185.webp",
    id: "33425932",
    cover_y: 2048,
    is_new: false
    },
    {
    rate: "6.5",
    cover_x: 2100,
    title: "麦路人",
    url: "https://movie.douban.com/subject/30312137/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2619912723.webp",
    id: "30312137",
    cover_y: 3000,
    is_new: false
    },
    {
    rate: "8.8",
    cover_x: 708,
    title: "来自深渊：深沉灵魂的黎明",
    url: "https://movie.douban.com/subject/27591193/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2589852362.webp",
    id: "27591193",
    cover_y: 1000,
    is_new: false
    },
    {
    rate: "7.3",
    cover_x: 1500,
    title: "我想结束这一切",
    url: "https://movie.douban.com/subject/30129061/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2619279677.webp",
    id: "30129061",
    cover_y: 2222,
    is_new: false
    },
    {
    rate: "7.7",
    cover_x: 2233,
    title: "1/2的魔法",
    url: "https://movie.douban.com/subject/30401849/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2616349563.webp",
    id: "30401849",
    cover_y: 3190,
    is_new: false
    },
    {
    rate: "6.3",
    cover_x: 1080,
    title: "妙先生",
    url: "https://movie.douban.com/subject/34888476/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614234255.webp",
    id: "34888476",
    cover_y: 1512,
    is_new: false
    },
    {
    rate: "8.8",
    cover_x: 1017,
    title: "多哥",
    url: "https://movie.douban.com/subject/30271841/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2575882765.webp",
    id: "30271841",
    cover_y: 1500,
    is_new: false
    },
    {
    rate: "7.6",
    cover_x: 1680,
    title: "误杀",
    url: "https://movie.douban.com/subject/30176393/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614628862.webp",
    id: "30176393",
    cover_y: 2352,
    is_new: false
    },
    {
    rate: "8.5",
    cover_x: 3000,
    title: "1917",
    url: "https://movie.douban.com/subject/30252495/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615015805.webp",
    id: "30252495",
    cover_y: 4200,
    is_new: false
    },
    {
    rate: "6.1",
    cover_x: 641,
    title: "刺猬索尼克",
    url: "https://movie.douban.com/subject/25905044/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614594570.webp",
    id: "25905044",
    cover_y: 1000,
    is_new: false
    },
    {
    rate: "7.2",
    cover_x: 1080,
    title: "冰雪奇缘2",
    url: "https://movie.douban.com/subject/25887288/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2572847101.webp",
    id: "25887288",
    cover_y: 1543,
    is_new: false
    },
    {
    rate: "8.3",
    cover_x: 5906,
    title: "少年的你",
    url: "https://movie.douban.com/subject/30166972/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.webp",
    id: "30166972",
    cover_y: 8268,
    is_new: false
    },
    {
    rate: "7.2",
    cover_x: 736,
    title: "翻译疑云",
    url: "https://movie.douban.com/subject/30145117/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580137248.webp",
    id: "30145117",
    cover_y: 1000,
    is_new: false
    },
    {
    rate: "5.1",
    cover_x: 1080,
    title: "釜山行2：半岛",
    url: "https://movie.douban.com/subject/30299515/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2588307420.webp",
    id: "30299515",
    cover_y: 1539,
    is_new: false
    },
    {
    rate: "7.8",
    cover_x: 1500,
    title: "数码宝贝：最后的进化",
    url: "https://movie.douban.com/subject/30482645/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2622478946.webp",
    id: "30482645",
    cover_y: 2200,
    is_new: false
    },
    {
    rate: "8.2",
    cover_x: 4000,
    title: "理查德·朱维尔的哀歌",
    url: "https://movie.douban.com/subject/25842038/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.webp",
    id: "25842038",
    cover_y: 5926,
    is_new: false
    },
    {
    rate: "6.0",
    cover_x: 1071,
    title: "两只老虎",
    url: "https://movie.douban.com/subject/30196805/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574713609.webp",
    id: "30196805",
    cover_y: 1500,
    is_new: false
    },
    {
    rate: "7.7",
    cover_x: 2416,
    title: "决战中途岛",
    url: "https://movie.douban.com/subject/26786669/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2573582192.webp",
    id: "26786669",
    cover_y: 3375,
    is_new: false
    },
    {
    rate: "8.2",
    cover_x: 1382,
    title: "灰猎犬号",
    url: "https://movie.douban.com/subject/26871906/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2591289975.webp",
    id: "26871906",
    cover_y: 2048,
    is_new: false
    },
    {
    rate: "9.1",
    cover_x: 563,
    title: "路人女主的养成方法 Fine",
    url: "https://movie.douban.com/subject/27596682/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2543633829.webp",
    id: "27596682",
    cover_y: 800,
    is_new: false
    },
    {
    rate: "8.7",
    cover_x: 1500,
    title: "克劳斯：圣诞节的秘密",
    url: "https://movie.douban.com/subject/26858510/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2570825762.webp",
    id: "26858510",
    cover_y: 2222,
    is_new: false
    },
    {
    rate: "6.5",
    cover_x: 1403,
    title: "OK老板娘",
    url: "https://movie.douban.com/subject/35127317/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2616000909.webp",
    id: "35127317",
    cover_y: 2000,
    is_new: false
    },
    {
    rate: "7.6",
    cover_x: 2025,
    title: "逃离比勒陀利亚",
    url: "https://movie.douban.com/subject/27046758/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2589768807.webp",
    id: "27046758",
    cover_y: 2925,
    is_new: false
    },
    {
    rate: "8.5",
    cover_x: 1944,
    title: "黑水",
    url: "https://movie.douban.com/subject/30331959/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2569450232.webp",
    id: "30331959",
    cover_y: 2880,
    is_new: false
    },
    {
    rate: "6.8",
    cover_x: 1403,
    title: "哦！文姬",
    url: "https://movie.douban.com/subject/30347027/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2619191892.webp",
    id: "30347027",
    cover_y: 2000,
    is_new: false
    },
    {
    rate: "7.4",
    cover_x: 2121,
    title: "温蒂妮",
    url: "https://movie.douban.com/subject/34603816/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2599824382.webp",
    id: "34603816",
    cover_y: 3000,
    is_new: false
    },
    {
    rate: "8.3",
    cover_x: 2000,
    title: "绅士们",
    url: "https://movie.douban.com/subject/30211998/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2592522995.webp",
    id: "30211998",
    cover_y: 3000,
    is_new: false
    },
    {
    rate: "8.9",
    cover_x: 800,
    title: "紫罗兰永恒花园 剧场版",
    url: "https://movie.douban.com/subject/30179560/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2611203679.webp",
    id: "30179560",
    cover_y: 1129,
    is_new: false
    },
    {
    rate: "8.6",
    cover_x: 4028,
    title: "82年生的金智英",
    url: "https://movie.douban.com/subject/30327842/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578045524.webp",
    id: "30327842",
    cover_y: 5740,
    is_new: false
    },
    {
    rate: "6.4",
    cover_x: 5400,
    title: "内战前",
    url: "https://movie.douban.com/subject/34814175/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2589506495.webp",
    id: "34814175",
    cover_y: 8000,
    is_new: false
    },
    {
    rate: "7.9",
    cover_x: 1080,
    title: "剧场版 架空OL日记",
    url: "https://movie.douban.com/subject/34336025/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2620587927.webp",
    id: "34336025",
    cover_y: 1527,
    is_new: false
    },
    {
    rate: "7.1",
    cover_x: 679,
    title: "前哨",
    url: "https://movie.douban.com/subject/30212622/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2607219972.webp",
    id: "30212622",
    cover_y: 1000,
    is_new: false
    },
    {
    rate: "5.5",
    cover_x: 513,
    title: "黑帮大佬和我的365日",
    url: "https://movie.douban.com/subject/34968329/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2609396514.webp",
    id: "34968329",
    cover_y: 598,
    is_new: false
    },
    {
    rate: "7.2",
    cover_x: 658,
    title: "逃走的女人",
    url: "https://movie.douban.com/subject/34958725/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2615399825.webp",
    id: "34958725",
    cover_y: 937,
    is_new: false
    },
    {
    rate: "8.1",
    cover_x: 950,
    title: "南山的部长们",
    url: "https://movie.douban.com/subject/30241298/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2581888792.webp",
    id: "30241298",
    cover_y: 1361,
    is_new: false
    },
    {
    rate: "8.4",
    cover_x: 1063,
    title: "进击的巨人：编年史",
    url: "https://movie.douban.com/subject/35088569/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2606366038.webp",
    id: "35088569",
    cover_y: 1500,
    is_new: false
    },
    {
    rate: "7.2",
    cover_x: 2765,
    title: "爱玛",
    url: "https://movie.douban.com/subject/30361878/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2581191543.webp",
    id: "30361878",
    cover_y: 4096,
    is_new: false
    },
    {
    rate: "5.6",
    cover_x: 1400,
    title: "#活着",
    url: "https://movie.douban.com/subject/34462775/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2604626010.webp",
    id: "34462775",
    cover_y: 2006,
    is_new: false
    },
    {
    rate: "5.8",
    cover_x: 1500,
    title: "铁雨2：首脑峰会",
    url: "https://movie.douban.com/subject/30479644/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2611996958.webp",
    id: "30479644",
    cover_y: 2143,
    is_new: false
    },
    {
    rate: "6.1",
    cover_x: 1968,
    title: "沉睡魔咒2",
    url: "https://movie.douban.com/subject/26426056/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2570105165.webp",
    id: "26426056",
    cover_y: 2913,
    is_new: false
    },
    {
    rate: "7.6",
    cover_x: 8175,
    title: "从不，很少，有时，总是",
    url: "https://movie.douban.com/subject/33411505/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2588279882.webp",
    id: "33411505",
    cover_y: 12075,
    is_new: false
    },
    {
    rate: "7.4",
    cover_x: 1000,
    title: "半个喜剧",
    url: "https://movie.douban.com/subject/30269016/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2576482356.webp",
    id: "30269016",
    cover_y: 1500,
    is_new: false
    },
    {
    rate: "6.6",
    cover_x: 4370,
    title: "受益人",
    url: "https://movie.douban.com/subject/30299311/",
    playable: true,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2572429001.webp",
    id: "30299311",
    cover_y: 6201,
    is_new: false
    },
    {
    rate: "7.1",
    cover_x: 1410,
    title: "正直的候选人",
    url: "https://movie.douban.com/subject/33441983/",
    playable: false,
    cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580093763.webp",
    id: "33441983",
    cover_y: 2009,
    is_new: false
    }
    ]
}

export default (req, res) => {
    client.connect(err => {
        // perform actions on the collection object
        const collection = client.db("sample_mflix");

        console.log('链接数据222库成功',collection)

        collection.collection("movies").find({}).toArray(function(err, result) { // 返回集合中所有数据
            console.log(result,err);
            client.close();
        });
        // client.close();
        console.log(err)
      });
    res.status(200).json(list)
  }
  
    