import request from '@/utils/request.js'

export const userRegisterService = (requestData) => {
    //借助URLSerchParams转换格式
    const params = new URLSearchParams()

    for (let key in requestData) {
        params.append(key, requestData[key]);
    }

    return request.post('/user/register', params)
}


//登录接口函数
export const userLoginService = (userLoginData) => {
    const params = new URLSearchParams()

    for (let key in userLoginData) {
        params.append(key, userLoginData[key]);
    }

    return request.post('/user/login', params)
}


//获取个人信息
export const userInfoGetService = () => {
    return request.get('/user/userInfo');
}

//修改个人信息
export const userInfoUpdateService = (userInfoData) => {
    return request.put('/user/update', userInfoData);
}

//修改头像
export const userAvatarUpdateService = (avatarUrl) => {
    const params = new URLSearchParams()
    params.append('avatarUrl', avatarUrl)
    return request.patch('/user/updateAvatar', params);
}

export const userUpdatePwd = (updateUserInfoData) => {
    const params = new URLSearchParams()
    params.append('oldPwd', updateUserInfoData.value.old_pwd)
    params.append('newPwd', updateUserInfoData.value.new_pwd)
    params.append('rePwd', updateUserInfoData.value.re_pwd)
    // console.log(updateUserInfoData.value.old_pwd)
    return request.patch('/user/updatePwd', params)
}