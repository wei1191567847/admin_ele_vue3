//过滤非法字符
export const filterEmail=(value)=>{
    var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？%]") 
    var rs = ""; 
    for (var i = 0; i < value.length; i++) {
    rs = rs+value.substr(i, 1).replace(pattern, ''); 
    } 
    return rs;
}

export const filterValue=(value)=>{
    var pattern = new RegExp("[`~!#$^&*()=|{}':;',\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？%]") 
    var rs = ""; 
    for (var i = 0; i < value.length; i++) {
    rs = rs+value.substr(i, 1).replace(pattern, ''); 
    } 
    console.log('',rs)
    return rs;
}

/*
    验证邮箱：var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    字母+数字：let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    字母 或 数字：left reg = /^[a-z0-9]{6}$/
*/   
   
//1.验证邮箱
export const validate_email = (value)=>{
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    
    return reg.test(value)
}
//2.验证密码
export const validate_password = (value)=>{
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;

    return reg.test(value)
}
//3.验证code
export const validate_code = (value)=>{
    let reg = /^[a-z0-9]{6}$/
    return reg.test(value)
}