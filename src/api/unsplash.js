import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UBxqnHIxRuvrZo4LrRgFsNWRn5G1jGOZN2DOrZ2Gta4'
    }
})