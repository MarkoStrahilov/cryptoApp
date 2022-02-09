import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.opensea.io/api/v1/assets'

const createRequest = (url) => ({ url })

export const nftApi = createApi({
    reducerPath: 'nftApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNfts: builder.query({
            query: (count) => createRequest(`?limit=${count}`)
        })
    })
})

export const {
    useGetNftsQuery
} = nftApi