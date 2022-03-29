import axios from "axios";
import { mapLocalHostToIP } from "../../utils";
import {
    requestListGameSuccess,
    requestListGameFailed,
    requestDetailGameSuccess,
    requestDetailGameFailed
} from '../actions/gameAction';

export const requestListGame = () => {
    return async dispatch => {
        //call api
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://10.0.2.2:3000/games',
            })
            const listGame = mapLocalHostToIP(response.data);
            dispatch(requestListGameSuccess(listGame));
        } catch (error) {
            console.log(error);
            dispatch(requestListGameFailed(error));
        }
    }
}

export const requestDetailGame = (id) => {
    return async dispatch => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://10.0.2.2:3000/games/${id}`,
            })
            dispatch(requestDetailGameSuccess(mapLocalHostToIP(response.data)));
        } catch (error) {
            console.log(error);
            dispatch(requestDetailGameFailed(error));
        }
    }
}