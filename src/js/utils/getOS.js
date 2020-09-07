export const MAC_OS = 'MacOS';
export const WINDOWS = 'Windows';

const getOS = () => {
  let OSName = 'Unknown OS';

  if (navigator.appVersion.indexOf('Win') !== -1) OSName = WINDOWS;
  if (navigator.appVersion.indexOf('Mac') !== -1) OSName = MAC_OS;
  if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'Linux';

  return OSName;
};

export default getOS;