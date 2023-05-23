import * as _ from 'lodash';

export const excludeFrom = (fields: any[], exclude: any[]) => _.difference(fields, exclude);
