import { render } from '@testing-library/react';
import { Card } from '../../components';
import { selectionMap } from '../../utils.ts/selectionMap';

// data
const rows: ReturnType<typeof selectionMap> = [
  {
    title: 'Children',
    items: [
      {
        title: 'Joker',
        description: 'Joker description',
        docId: 'sdfsdfsdf33f3ff3f',
        id: 'sdfsdfsdf3f3f3f',
        maturity: '15',
        slug: 'joker',
        genre: 'children',
      },
    ],
  },
];

const category = 'films';
const row = rows[0];
const item = rows[0].items[0];

describe('<Card />', () => {
  it('render Card with populated data', () => {
    const { container, queryByText, queryByAltText } = render(
      <Card.Container>
        <Card>
          <Card.Title>{row.title}</Card.Title>
          <Card.Items>
            <Card.Item>
              <Card.ItemImage
                src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                alt={item.title}
              />
              <Card.Meta>
                <Card.Subtitle>{item.title}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Meta>
            </Card.Item>
          </Card.Items>
        </Card>
      </Card.Container>
    );

    // card title
    expect(queryByText(row.title)).toBeTruthy();

    // item image
    expect(queryByAltText(item.title)).toHaveAttribute(
      'src',
      `/images/${category}/${item.genre}/${item.slug}/small.jpg`
    );

    // item title
    expect(queryByText(item.title, { selector: 'h3' })).toBeTruthy();

    // item description
    expect(queryByText(item.description)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Card.Feature with populated data', () => {
    const { container, queryByText, queryByAltText } = render(
      <Card.Container>
        <Card>
          <Card.Feature
            url={`/images/${category}/${item.genre}/${item.slug}/large.jpg`}
          >
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>

            <Card.Group>
              <Card.Maturity maturity={+item.maturity} />
              <Card.Subtitle>
                {item.genre[0].toLocaleUpperCase() + item.genre.slice(1)}
              </Card.Subtitle>
            </Card.Group>

            <Card.FeatureClose>
              <img src='/images/icons/close.png' alt='close' />
            </Card.FeatureClose>
          </Card.Feature>
        </Card>
      </Card.Container>
    );

    // feature title
    expect(queryByText(item.title)).toBeTruthy();

    // feature description
    expect(queryByText(item.description)).toBeTruthy();

    // feature maturity
    expect(queryByText(item.maturity)).toBeTruthy();

    // feature genre
    expect(
      queryByText(item.genre[0].toLocaleUpperCase() + item.genre.slice(1))
    ).toBeTruthy();

    // feature close button
    expect(queryByAltText('close')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Card.Feature with no background and 0 maturity', () => {
    const { container, queryByText } = render(
      <Card.Container>
        <Card>
          <Card.Feature url={''}>
            <Card.Group>
              <Card.Maturity maturity={0} />
            </Card.Group>
          </Card.Feature>
        </Card>
      </Card.Container>
    );

    // feature maturity
    expect(queryByText(0)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
