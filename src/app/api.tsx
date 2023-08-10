import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import dotenv from 'dotenv'

dotenv.config()

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:1337'}),
    reducerPath:'main',
    tagTypes:[],
    endpoints:(build:any)=>({
        getWatherLocation: build.mutation({
            query:(payload:{})=>({
                url:'weather/location',
                method:'POST',
                body:payload
            })
        }),
        storeWeather: build.mutation({
            query:(payload:{})=>({
                url:'weather/store',
                method:'POST',
                body:payload
            })
        }),
        retrieveWeather: build.mutation({
            query:()=>({
                url:'weather/retrieve',
                method:'GET'
            })
        })
    })
})

export const {
    useGetWatherLocationMutation,
    useStoreWeatherMutation,
    useRetrieveWeatherMutation
} = api