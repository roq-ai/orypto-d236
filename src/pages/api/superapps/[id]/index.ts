import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { superappValidationSchema } from 'validationSchema/superapps';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.superapp
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSuperappById();
    case 'PUT':
      return updateSuperappById();
    case 'DELETE':
      return deleteSuperappById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSuperappById() {
    const data = await prisma.superapp.findFirst(convertQueryToPrismaUtil(req.query, 'superapp'));
    return res.status(200).json(data);
  }

  async function updateSuperappById() {
    await superappValidationSchema.validate(req.body);
    const data = await prisma.superapp.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    if (req.body.name) {
      await roqClient.asUser(roqUserId).updateTenant({ id: user.tenantId, tenant: { name: req.body.name } });
    }
    return res.status(200).json(data);
  }
  async function deleteSuperappById() {
    const data = await prisma.superapp.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
