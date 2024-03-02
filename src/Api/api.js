import axios from 'axios';

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {"API-KEY" : "18ee4b95-ef40-497f-aaf0-1f458d2e09d0"}
    }
);

export const usersAPI = {
   getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
   setFollow(id) {
        return instance.post(`follow/${id}` )
    },
   setUnFollow(id){
       return instance.delete( `follow/${id}`)
    },
   
}


export const loginAPI = {
    myself(){
        return instance.get(`auth/me`)
    },
    login(email , password , rememberMe = false){
        return instance.post(`auth/login` , {email , password , rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/` + userId)
       },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/` , {status: status})
    },
    setProfileImage(image){
        let formData = new FormData()
        formData.append("image" , image)
        return instance.put(`/profile/photo/` , formData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileChanges(profile){
        return instance.put('profile' , profile)
    }
}

 