import { getUser } from "../service/user.js"
import { postUser } from "../service/user.js"

export const User =  async (request, response) =>{
    const {username, email, password} = request.body;
    const akun = await getUser  (username, email, password);

    response.json({
        data: akun,
    });
}

export const Post =  async (request, response) =>{
    const {username, email, password} = request.body;
    const akun = await postUser  (username, email, password);

    response.json({
        data: akun,
    });

};