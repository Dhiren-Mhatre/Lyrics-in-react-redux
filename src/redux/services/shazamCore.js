import {buildCreateApi, createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
      baseQuery:'https://shazam-api7.p.rapidapi.com/search',
      prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key','416922c6f5msh2692bc717a0198ap18fb59jsn2c0e0310b0eb');
        return headers;
      },
    }),
    endpoints:(builder)=>({
      getTopCharts:builder.query({query:()=>'/charts/world'}),
    })
  });

  export const{
    useGetTopChartsQuery,
  } = shazamCoreApi;