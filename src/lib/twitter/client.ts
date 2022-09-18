import Client from "twitter-api-sdk";
import { Twitter } from "types/Twitter";

export const twitterClient = new Client(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN);

type TwitterResponseError = {
  title: string;
  type: string;
  detail?: string | undefined;
  status?: number | undefined;
};

type TwitterResponse = {
  data?: Twitter[];
  errors?: TwitterResponseError[];
};

export const fetchTweets = async (userId: string): Promise<TwitterResponse> => {
  const tweetsReponse = await twitterClient.tweets.usersIdTweets(userId, {
    expansions: ["author_id"],
    "tweet.fields": ["author_id", "created_at"],
    "user.fields": ["name", "profile_image_url", "username"],
  });
  const errors = tweetsReponse.errors;
  if (errors !== undefined) {
    return { errors };
  }
  const data = tweetsReponse.data;
  const user = tweetsReponse.includes!.users![0];
  const tweets = data?.map((element) => {
    const tweet: Twitter = {
      id: element.id,
      userName: user.name,
      userId: user.username,
      userIcon: user.profile_image_url!,
      tweet: element.text,
      createdAt: element.created_at!,
    };
    return tweet;
  });
  return { data: tweets ?? [] };
};
