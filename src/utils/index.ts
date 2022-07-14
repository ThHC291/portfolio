export function limitSizeOfString(string = '', size = 150) {
  if (string) {
    return string.length > size ? string.substring(0, size).concat('...') : string;
  }
};
