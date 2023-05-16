// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("hi")
  res.status(200).json({ name: 'John Doe' })
}
export const config = {
  type: 'experimental-scheduled',
  schedule: '0 */6 * * *',
};