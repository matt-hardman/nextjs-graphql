import { Args, Context } from "./types";

export const resolvers = {
  Query: {
    test: async (_parent: any, _args: Args, context: Context) => {
      const { Get } = context;
      const response = await Get.getTest();
      const json = await response.json();
      return json;
    },
    news: async (_parent: any, args: Args, context: Context) => {
      const { topic } = args;
      const { Get } = context;
      const response = await Get.getNews({ topic });
      const json = await response.json();
      return json;
    },
  },
};
