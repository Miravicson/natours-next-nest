import * as _ from 'lodash';

/**
 * Remove nullish and undefined properties or properties with empty string from object
 * @param object {Object}
 * @returns {Object} cleaned object
 */
export function cleanObject(object: Record<string, any>): Record<string, any> {
  const result = _.omitBy(object, (v) => _.isNil(v) || !Boolean(v));
  return result;
}
