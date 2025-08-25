/**
 * file to store utility functions
 */

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export { copyToClipboard };
