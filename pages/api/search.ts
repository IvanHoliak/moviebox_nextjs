import { NextApiRequest, NextApiResponse } from "next";
import { searchController } from "../../libs/controller";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST'){
        res.status(405).send({message: "Only POST requests allowed"});
        return;
    };

    searchController(req, res);
};

export default handler;