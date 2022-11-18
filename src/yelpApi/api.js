import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Wd46s8n78YSoIjryGPVKT4jFmIEpxFcu77bjUdW30kbmjK81qt8q_p-75jlEg_FkU8RXtHhWsfymU5FC7cJfR1qIu0IvpIOf0_y9JyPjGOYD4t4ybR6tZrLHICTkYXYx"
    }
})