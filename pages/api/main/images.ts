// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mainPageImages } from '../../../util/dummyData';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json(mainPageImages);
}
