import { writable, type Writable } from 'svelte/store'

export const serversStore: Writable<any> = writable()

export const fetchServers = async () => {
  const response = await fetch('/api', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  })
  serversStore.set(response)
}
