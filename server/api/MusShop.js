export default defineEventHandler(async (event) => {
    // handle query params
    // const { name } = useQuery(event)

    // handle post data
    // const { age } = await useBody()

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_nYa0cOf427CJ5HWQQD85a6iWpnQCJVnnpDDcJ8GG')

    return data
})
