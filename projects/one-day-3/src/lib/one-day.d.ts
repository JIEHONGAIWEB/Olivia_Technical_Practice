export interface content {
  title: string;
  description: string;
  subContent: [
    {
      subtitle: string;
      'card-content': [
        {
          title: string;
          contentDescription: string;
          bottomDescription: string;
        }
      ];
    }
  ];
}
