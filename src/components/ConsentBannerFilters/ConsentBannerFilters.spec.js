import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import countries from '../../mocks/countries.json';


import ConsentBannerSelection from './ConsentBannerFilters';

async function getConsentBannerFormatRadioButtons() {
  const disagreeRadioButton = await screen.findByLabelText('Disagree button');
  const linkCloseRadioButton = screen.getByLabelText('Link + Close option');
  const closeDisagreeRadioButton = screen.getByLabelText('Close = disagree');
  const withoutAgreeLinkRadioButton = screen.getByLabelText('Continue without agreeing link');
  const noDisagreeActionRadioButton = screen.getByLabelText('No disagree action');

  return {
    disagreeRadioButton,
    linkCloseRadioButton,
    closeDisagreeRadioButton,
    withoutAgreeLinkRadioButton,
    noDisagreeActionRadioButton
  }
}

describe('ConsentBannerFilters Component Test', () => {
  it('displays all options properly', async () => {
    render(<ConsentBannerSelection />);

    const {
      disagreeRadioButton,
      linkCloseRadioButton,
      closeDisagreeRadioButton,
      withoutAgreeLinkRadioButton,
      noDisagreeActionRadioButton
    } = await getConsentBannerFormatRadioButtons()

    expect(disagreeRadioButton).toBeVisible();
    expect(linkCloseRadioButton).toBeVisible();
    expect(closeDisagreeRadioButton).toBeVisible();
    expect(withoutAgreeLinkRadioButton).toBeVisible();
    expect(noDisagreeActionRadioButton).toBeVisible();
  })

  it('displays the correct image and caption when each banner radio option is selected', async () => {
    render(<ConsentBannerSelection />);

    const {
      disagreeRadioButton,
      linkCloseRadioButton,
      closeDisagreeRadioButton,
      withoutAgreeLinkRadioButton,
      noDisagreeActionRadioButton
    } = await getConsentBannerFormatRadioButtons();

    userEvent.click(noDisagreeActionRadioButton);
    const noDisagreeActionButtonImage = screen.getByAltText('No disagree action consent banner format');
    expect(noDisagreeActionRadioButton).toBeChecked();
    expect(noDisagreeActionButtonImage).toBeVisible();

    userEvent.click(withoutAgreeLinkRadioButton);
    const withoutAgreeLinkRadioButtonImage = screen.getByAltText('Continue without agreeing link consent banner format');
    expect(withoutAgreeLinkRadioButton).toBeChecked();
    expect(withoutAgreeLinkRadioButtonImage).toBeVisible();

    userEvent.click(closeDisagreeRadioButton);
    const closeDisagreeRadioButtonImage = screen.getByAltText('Close = disagree consent banner format');
    expect(closeDisagreeRadioButton).toBeChecked();
    expect(closeDisagreeRadioButtonImage).toBeVisible();

    userEvent.click(linkCloseRadioButton);
    const linkCloseRadioButtonImage = screen.getByAltText('Link + Close option consent banner format');
    expect(linkCloseRadioButton).toBeChecked();
    expect(linkCloseRadioButtonImage).toBeVisible();

    userEvent.click(disagreeRadioButton);
    const disagreeRadioButtonImage = screen.getByAltText('Disagree button consent banner format');
    expect(disagreeRadioButton).toBeChecked();
    expect(disagreeRadioButtonImage).toBeVisible();
  })

  it('selected the correct banner when image radio buttons are selected', async () => {
    render(<ConsentBannerSelection />);

    const {
      disagreeRadioButton,
      linkCloseRadioButton,
      closeDisagreeRadioButton,
      withoutAgreeLinkRadioButton,
      noDisagreeActionRadioButton
    } = await getConsentBannerFormatRadioButtons();

    const europeOption = screen.getByLabelText('Europe');
    const italyOption = screen.getByLabelText('Italy');
    const franceOption = screen.getByLabelText('France');
    const thailandOption = screen.getByLabelText('Thailand');

    userEvent.click(europeOption);
    expect(disagreeRadioButton).toBeChecked();

    userEvent.click(italyOption);
    expect(closeDisagreeRadioButton).toBeChecked();

    userEvent.click(franceOption);
    expect(withoutAgreeLinkRadioButton).toBeChecked();

    userEvent.click(thailandOption);
    expect(noDisagreeActionRadioButton).toBeChecked();
  })
})

