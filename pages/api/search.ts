import { NextApiRequest, NextApiResponse } from "next";
import { searchController } from "../../libs/controllers/searchController";
// import { searchController } from "../../libs/controllers/searchController";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST'){
        res.status(405).send({message: "Only POST requests allowed"});
        return;
    };
    searchController(req, res);
    // searchController(req, res);
};

export default handler;