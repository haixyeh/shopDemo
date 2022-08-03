import { isEqual } from 'lodash';

export const areEqual = (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps)
}

export default { areEqual };