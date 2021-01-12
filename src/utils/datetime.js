import { format as datefnsFormat, parse as datefnsParse } from 'date-fns';

export function format(date) {
  return datefnsFormat(date, 'MMM dd, yyyy');
}

export function parse(dateString) {
  return datefnsParse(dateString, "yyyy-MM-dd'T'HH:mm:ssxxx", new Date());
}
