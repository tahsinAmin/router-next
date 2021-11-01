import {NextApiRequest, NextApiResponse} from 'next'

export default function getAllVehices(req: NextApiRequest, res: NextApiResponse) {
   if(req.method !== 'GET') {
      res.json({message:'sorry, we only accept GET'});
   }
   res.json({hello:'world', method:req.method});
}
