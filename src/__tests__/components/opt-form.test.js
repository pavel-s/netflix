import { render } from '@testing-library/react';
import { OptForm } from '../../components';

describe('<OptForm />', () => {
  it('render OptForm', () => {
    const { container, queryByText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    );

    expect(
      queryByText(
        'Ready to watch? Enter your email to create or restart your membership.'
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
