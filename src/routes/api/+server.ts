
import type { RequestHandler } from './$types'
import { Server } from '@fabricio-191/valve-server-query'
import { serverList } from 'src/servers/serversList'
import { json } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  let infoList: Server.Info[] = []
  for await (const server of serverList) {
    const sv = await Server({ ip: server.ip, port: server.port, timeout: 3000 })
    const svInfo = await sv.getInfo()
    infoList.push(svInfo)
  }
  return json(infoList)
}
