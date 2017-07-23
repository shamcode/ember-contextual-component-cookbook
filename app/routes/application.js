import Route from "@ember/routing/route";
import { getOwner } from "@ember/application";

export default Route.extend({
  config() {
    return getOwner(this).resolveRegistration('config:environment');
  },

  menuItems() {
    return this.config().APP.menuItems;
  },

  model() {
    return {
      menuItems: this.menuItems()
    }
  }
});
