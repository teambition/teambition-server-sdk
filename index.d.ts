declare module "teambition-server-sdk" {
    export = TeambitionServerSDK
}

declare namespace TeambitionServerSDK {
    namespace Client {
        class Base {
            setHeader(header: Header): this
            setUrl(url: string): this
            setClient(client)
        }

        class DataFactory {

        }

        class Task extends Base {
            url: string
            header: Header
            client: any

            createOne(body: Object, projectType?: string)
        }
    }

    namespace DataFactory {
        class DataFactory {
            JobSlice(job: any, capacity: number): Promise<any>
        }
    }
}

interface Header {
    cookie?: string
    'request-server'?: string
    Authorization?: string
}