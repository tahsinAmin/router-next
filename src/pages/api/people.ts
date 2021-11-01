import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getPeople(req: NextApiRequest, res: NextApiResponse) {
   
   const people = await prisma.person.findMany()

   res.json(people);

}