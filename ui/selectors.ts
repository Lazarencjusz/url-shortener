export const shoutItButton: HTMLElement = document.getElementById('short-it-button');
export const urlInput: HTMLInputElement = document.getElementById('url-input') as HTMLInputElement;

export const resultsSection: HTMLElement = document.getElementById('results-section');
export const linkElement: HTMLElement = document.getElementById('link-element');

export const urlInputText = (): string => {
  return urlInput.value;
};