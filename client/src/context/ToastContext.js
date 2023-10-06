import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const ToastContext = createContext()


export const ToastContextProvider = ({ children }) => {


    const success = (msg) => {
        return toast.success(msg, {
            icon: "🚀",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    const error = (msg) => {
        return toast.error(msg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const warn = (msg) => {
        return toast.warn(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <ToastContext.Provider value={{ error, success, warn }}>
            {children}
        </ToastContext.Provider>
    )
}

export const Toast = () => {
    return useContext(ToastContext)
}