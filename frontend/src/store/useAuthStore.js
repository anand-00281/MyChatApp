import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'
import { toast } from "react-hot-toast";
import {io} from "socket.io-client"

const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5000/api' : "/api";

export const useAuthStore = create((set,get) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,
    isUpdatingProfile: false,
    onlineUsers: [],
    socket: null,

    checkAuth: async () => {

        try {
            const res = await axiosInstance.get('/auth/check')
            set({ authUser: res.data })
            get().connectSocket()
        } catch (error) {
            console.log("Error checking auth", error)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({isSigningUp :true});
        try {
            set({ isSigningUp: true })
            const res = await axiosInstance.post('/auth/signup', data);
            set({ authUser: res.data })
            
            toast.success("Account Created successfully");
            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message)
            console.log("Error signing up", error)
        } finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({authUser: null});
            toast.success("Logged out successfully");
            get().disConnectSocket()
        } catch (error) {
            toast.error(error.response.data.message);
            console.log("Error logging out", error);
        }
    },

    login: async (data) => {
        set({isLoggingIn: true});
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({authUser: res.data});
            toast.success("Logged in successfully");

            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message);
            console.log("Error logging in", error);
        } finally {
            set({isLoggingIn: false});
        }
    },
    
    updateProfile: async (data) =>{
        set({isUpdatingProfile: true});
        try {
            const res = await axiosInstance.put('/auth/update-profile', data);
            set({authUser: res.data});
            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isUpdatingProfile: false});
        }
    },

    connectSocket: () =>{
        const {authUser} = get();
        if(!authUser || get().socket?.connected) return;
        const socket = io(BASE_URL,{
            query:{
                userId: authUser._id,
            }
        })
        socket.connect();

        set({socket: socket});

        socket.on("getOnlineUsers",(userIds) => {
            set({onlineUsers : userIds})
        })
    },
    disConnectSocket: () =>{
        if(get().socket?.connected) get().socket.disconnect();
    }
})
);