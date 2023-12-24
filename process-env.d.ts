declare namespace NodeJS {
  export type processEnv = {
    PORT: number
    DATABASE_URL_LOCAL: string | undefined
    DATABASE_URL: string
    NODE_ENV: string
  }
}
