import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from 'lib/sanity.client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sanityClient.create(req.body);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(500).json({ message: 'error' });
  }
}
