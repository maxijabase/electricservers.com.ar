import { writable, type Writable } from 'svelte/store'
import { Server } from '@fabricio-191/valve-server-query'

export const serversStore: Writable<Server.Info[]> = writable([])

export const fetchServers = async (serverList: any[]) => {
  let infoList: Server.Info[] = []
  for await (const server of serverList) {
    const sv = await Server({ ip: server.ip, port: server.port, timeout: 3000 })
    const svInfo = await sv.getInfo()
    infoList.push(svInfo)
  }
  serversStore.set(infoList)
}