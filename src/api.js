import axios from "axios";

const BaseA_Url = "https://www.cheapshark.com/api/1.0";

export const getData = async (url) => {
    const {data} = await axios.get(`${BaseA_Url}${url}`);
    return data;
}
