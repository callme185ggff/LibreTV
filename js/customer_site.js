const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
