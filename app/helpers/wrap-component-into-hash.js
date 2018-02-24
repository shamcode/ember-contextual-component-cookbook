import { helper } from '@ember/component/helper';
import EmberObject from '@ember/object';

export function wrapComponentIntoHash(params/*, hash*/) {
  return EmberObject.create({
    [params[0]]: params[1]
  });
}

export default helper(wrapComponentIntoHash);
