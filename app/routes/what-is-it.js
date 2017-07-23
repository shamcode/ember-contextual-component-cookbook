import Route from "@ember/routing/route";

export default Route.extend({
  model(){
    return {
      contextualComponentLink: 'https://guides.emberjs.com/v2.14.0/components/wrapping-content-in-a-component/#toc_sharing-component-data-with-its-wrapped-content'
    }
  }
});
