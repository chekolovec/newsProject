export default interface IMainContent {
  data: [
    {
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
    },
  ];
}
