import { NextApiHandler, NextApiRequest, NextApiResponse,  } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const authenticated = (fn : NextApiHandler) => async (req: NextApiRequest, res : NextApiResponse) => {
     return await fn(req, res)
}

export default authenticated(async function getPeople(req: NextApiRequest, res: NextApiResponse) {

   const people  = await prisma.person.findMany({
      select: {
         id:true,
         name: true,
         email: true
      },
    })

   res.json(people);
})