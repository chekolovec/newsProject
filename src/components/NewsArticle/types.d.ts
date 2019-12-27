export default interface INewsArticle {
  article: {
    title: string;
    media: [
      {
        ["media-metadata"]: {
          url: string;
        };
      },
    ];
    abstract: string;
    url: string;
    id: string;
  };
}
