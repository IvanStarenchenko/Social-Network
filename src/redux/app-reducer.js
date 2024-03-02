import { getMyselfAuthData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


let initialState = {
  initialized: false,
}



const appReducer = ( state = initialState , action) => { 
    switch(action.type ) {
         case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
        default: 
            return state;
    }
    
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
})

export const initializeApp = () => (dispatch) =>{
   let promise = dispatch(getMyselfAuthData()); // Создаём промис от санки где получаем данные пользователя. Для этого перед тем как пинать апи, пишем return. Если бы нам нужно было несколько диспачей, создали бы на каждый по промису
   Promise.all([promise]).then(() => { // Когда все промисы зарезолвились (их может быть больше чем один), тогда срабатывает then который даёт понять, что пользователь заинициализирован
    dispatch(initializedSuccess()); // Задача данной конструкции в том, чтобы проверить инициализирован ли пользователь и выдавать ли ему App.js в котором у нас ВСЁ. 
   })

}

export default appReducer
