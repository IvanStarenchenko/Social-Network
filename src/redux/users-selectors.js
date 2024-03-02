import { createSelector } from "reselect"

export const getUsersData = (state) => {
    return  state.usersPage.usersData
}

export const getPageSize = (state) => {
    return  state.usersPage.pageSize
}

export const getTotalItemsCount = (state) => {
    return  state.usersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return  state.usersPage.currentPage
}

export const getFollowingInProggres = (state) => {
    return  state.usersPage.followingInProggres
}

export const getFollowed = (state) => {
    return  state.usersPage.followed
}
export const portionSize = (state) => {
    return  state.usersPage.portionSize
}

export const profile = (state) => {
    return state.profilePage.profile
}
// --------------------------------------------------------------------------------
// пример использования библиотеки reselector на сложном selector`е

//  const getUsers = (state) => {
//     return state.usersPage.usersData
// }

// export const getUsersDataFilter = (state) => {
//     return getUsers(state).filter(u => true)
// }

// export const getUsersDataFilterReselect = createSelector(getUsers , getFollowed , // может быть и больше зависимостей
//  (users, getFollowed) => {
//     return users.filter(u => true)
// })

