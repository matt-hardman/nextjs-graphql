export interface Context {
  Get: {
    getTest: () => any;
    getNews: (args: Args) => any;
  };
}

export interface Args {
  topic: string;
}
