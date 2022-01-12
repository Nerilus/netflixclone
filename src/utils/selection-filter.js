export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-group'),
      },
    ],
    films: [
      {
        title: 'Drame',
        data: films.filter((item) => item.genre === 'drame'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'Thrillers'),
      },
      {
        title: 'Children',
        data: films.filter((item) => item.genre === 'Children'),
      },
      {
        title: 'Suspense',
        data: films.filter((item) => item.genre === 'Suspense'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'Romance'),
      },
    ],
  };
}
