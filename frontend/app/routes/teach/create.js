import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeachCreateRoute extends Route {
  @service me;

  model() {
    return this.store.createRecord('chapter', {
      creator: this.me.get('user'),
    });
  }
}
