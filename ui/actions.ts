import { linkElement, resultsSection, urlInput, urlInputText } from './selectors';
import { shortenUrl } from './service';

export const clearUrlInput = () => (urlInput.value = '');
export const makeResultVisible = () => (resultsSection.className = '');
export const setLinkText = (text: string) => (linkElement.innerText = `localhost${text}`);
export const setLinkHref = (href: string) => linkElement.setAttribute('href', href);

export const onShortIt = async () => {
  const url = urlInputText();
  const shortUrl = await shortenUrl(url);
  clearUrlInput();
  const linkText = `/${shortUrl}`;
  setLinkText(linkText);
  setLinkHref(linkText);
  makeResultVisible();
};
