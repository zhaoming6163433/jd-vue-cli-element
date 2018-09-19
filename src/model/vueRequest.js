import Vue from 'vue';
import appConfigs from 'src/configs'
import util from 'src/util/util.js'

export default async (apiurl = '', params = {}, type = 'GET', method = '', userparam = false) => {
    type = type.toUpperCase();

    function handleres(res,resolve) {
        if (res.data && res.data.respCode == 0) {
            resolve(res.data.result);
        } else
        if (res.data && res.data.respCode == 1000 || res.data && res.data.respCode == 1001) { //未登录直接跳转
            reject(res);
            util.vuethis.$router.push({
                "name": "login"
            });
        } else {
            util.errortip(res.data && res.data.message);
            reject(res)
        }
    }
    if (method == 'ajax') {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: apiurl,
                data: params,
                type: "POST",
                contentType: false,
                processData: false,
                success: function (res) {
                    if (res.code == 0) {
                        resolve(res)
                    } else
                    if (res.code == 1000 || res.code == 1001) { //未登录直接跳转
                        reject(res);
                        util.vuethis.$router.push({
                            "name": "login"
                        });
                    } else if (res.code == 1002) {
                        util.warningtip("请完善信息后操作");
                        util.vuethis.$router.push({
                            "name": "hospitalinfo"
                        });
                    } else {
                        util.errortip(res.message);
                        reject(res)
                    }
                },
                error: function (res) {
                    reject(res);
                },
                timeout: appConfigs.timeout
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            if (type == "GET") {
                Vue.prototype.$http.get(apiurl, {
                        params: params
                    })
                    .then(function (res) {
                        handleres(res,resolve);
                    })
                    .catch(function (err) {
                        util.errortip('网络请求失败');
                        reject(err);
                    });
            }
            if (type == "POST") {
                Vue.prototype.$http.post(apiurl, {
                        params: params
                    })
                    .then(function (res) {
                        handleres(res,resolve);
                    })
                    .catch(function (err) {
                        util.errortip('网络请求失败');
                        reject(err);
                    });
            }
        });
    }
}
