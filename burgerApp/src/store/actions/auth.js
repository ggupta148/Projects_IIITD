import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

/**
 * action type for redirecting to the checkout page after signup.
 */
export const setAuthRedirectPath=(path)=>{
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

/**
 * This actionType will be doing asynhronous action call of auth.
 */

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        /**
         * This is the Url for user signUp if the user not exists.
         */

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkx2O3-ltagONA_okB5zyPbVv9sCJxF7A';


        console.log(isSignUp);
        /**
         * This is the Url for signIn with password if the user already exists ..
         */

        if (!isSignUp) {
            console.log(isSignUp);
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkx2O3-ltagONA_okB5zyPbVv9sCJxF7A';
        }


        axios.post(url, authData)
            .then(response => {
                console.log(url);
                console.log(response);

                //  console.log("userId",response.data.userId);
                console.log("userId", response.data.localId);
                const expirationDate= new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('expirationDate',expirationDate);
                localStorage.setItem('userId',response.data.localId);


                dispatch(authSuccess(response.data.idToken, response.data.localId));

                console.log("expire", response.data.expiresIn);

                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.error.message);
                dispatch(authFail(err.response.data.error));
            });

    };
};

export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate')) ;
            if(expirationDate <= new Date())
            {
                dispatch(logout());
            }
            else{
                const userId=localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout( (expirationDate.getTime()-new Date().getTime()) /1000 ));

            }
            
        }
       // const expirationDate=localStorage.getItem('expirationDate');
    }
}