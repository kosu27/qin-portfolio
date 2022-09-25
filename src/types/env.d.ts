declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_KEY: string;
    readonly NEXT_PUBLIC_TWITTER_API_KEY: string;
    readonly NEXT_PUBLIC_TWITTER_API_KEY_SECRET: string;
    readonly NEXT_PUBLIC_TWITTER_BEARER_TOKEN: string;
    readonly MY_TWITTER_USER_ID: string;
    readonly NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN: string;
  }
}
