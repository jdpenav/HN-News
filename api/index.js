import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {

    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude:  bl_lat ? bl_lat : '12.98082011536333',
                    tr_latitude:  tr_lat ? bl_lat : '17.46779994035406',
                    bl_longitude: bl_lng ? bl_lng : '-89.35648221780147',
                    tr_longitude: tr_lng ? tr_lng : '-83.06210007039704',
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '5fa61cbb24mshfd0c993da5e2f61p1f179ejsn4d9efb2d8acb',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }

            }
        )

        return data;

    } catch (error) {
        return null;
    }
};