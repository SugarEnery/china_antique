// var _Config_ = {
// 	API_PATH: "http://api.chinabogu.com/"
// };

// // 线上地址
// var Router= "http://api.chinabogu.com/";

// // 本地地址
// // var Router = "http://192.168.23.123:8000/";
// //ajax
// const ajaxPromise = (obj,access_token) => {
//     return new Promise((resolve, reject) => {
//         if(access_token){
//             $.ajax({
//                 type: obj.type,
//                 url: obj.url,
//                 data: obj.data,
//                 // dataType: 'jsonp',  
//                 // crossDomain: true,  
//                 beforeSend: function (xhr) {
//                     xhr.setRequestHeader('Authorizations', 'Bearer '+ access_token);
//                 },
//                 success: res => {
//                     resolve(res); // 请求成功则转成Promise对象并判断为resolve状态
//                 },
//                 error: err => {
//                     reject(err); // 请求失败则转成Promise对象并判断为reject状态
//                 }
//             });
//         }else {
//             $.ajax({
//                 type: obj.type,
//                 url: obj.url,
//                 data: obj.data,
//                 success: res => {
//                     resolve(res); // 请求成功则转成Promise对象并判断为resolve状态
//                 },
//                 error: err => {
//                     reject(err); // 请求失败则转成Promise对象并判断为reject状态
//                 }
//             });
//         }
//     });
// };
 