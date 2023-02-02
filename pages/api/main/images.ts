// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MainPageCarouselImages } from '../../../types/props';
import { mainPageImages } from '../../../util/dummyData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MainPageCarouselImages>
) {
  const prisma = new PrismaClient();
  const resHomeImages = await prisma.homeImage.findMany();

  const result = {
    imgPaths: resHomeImages.map((eachPath) => eachPath.path),
  };
  res.status(200).json(result);
}
