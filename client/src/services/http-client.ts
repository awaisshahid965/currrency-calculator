import { HttpRequestMethods } from '@/shared/types'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const headerConfig = { 'Content-Type': 'application/json' } // must be passed from service file

class HttpClient {
  static async get(resourcePath: string, headers?: Record<string, string>) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.GET,
      headers: {
        ...headerConfig,
        ...headers,
      },
    })
    const responseObject = await request.json()
    return responseObject
  }

  static async post(resourcePath: string, body: any, headers?: Record<string, string>) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.POST,
      headers: {
        ...headerConfig,
        ...headers,
      },
      body: JSON.stringify(body),
    })
    const responseObject = await request.json()
    return responseObject
  }
}

export default HttpClient
