/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
const toastime = 3000;
const timeout = 60000;
const ak = 'YEC9IHhGrw5361ioh6ugEsIqKIkPIwy7';
const filename = '/o2omallwx';
const accuracy = false;//是否开启精准定位 不开启定位失败就默认北京天安门

let urlWebHttp;
let plant = '';
let get_signature = '';
let uploadimgsuc = '';//上传图片路径

console.log(process.env)
//切换环境 //线上https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815d2a2b25015d83703046009a
switch (process.env.srconfig) {
	case 'dev':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	case 'beta':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	case 'pro':
		urlWebHttp = "https://oldpwatest.todaypocket.cn";
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815d2a2b25015d83703046009a?';
		break;
	case 'testdev':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	default://默认开发
		urlWebHttp = "https://oldpwatest.todaypocket.cn";
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
}
//上传图片模拟成功地址
uploadimgsuc = urlWebHttp+'/fd-sign-pc/user/over';

//判断平台
if(navigator.userAgent.match(/MicroMessenger/igm)){
	plant = 'weixin';
}


export default{
	urlWebHttp,
	toastime,
	timeout,
	ak,
	filename,
	accuracy,
	plant,
    get_signature,
    uploadimgsuc
}
