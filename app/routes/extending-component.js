import Route from "@ember/routing/route";

const BLOG_POST_ORIGINAL = `
<div class="blog-post">
    <!--Dynamic content-->
</div>
`;

const BLOG_POSTS_LIST_ORIGINAL = `
{{#each posts as |post|}}
    {{extending-component/blog-post post=post}}
{{/each}}
`;

const BLOG_POST_SOLUTION = `
<div class="blog-post">
    {{yield}}
</div>
`;

const BLOG_POSTS_LIST_SOLUTION = `
{{#each posts as |post|}}
    {{#extending-component/blog-post}}
      {{post.content}}
    {{/extending-component/blog-post}}
{{/each}}
`;

const OOP_PROBLEM_ANALOG = `
class BlogPost {
    render() {
        this.beforeContent();
        // Dynamic content      
        this.afterContent();
    }
}
`;

const OOP_PROBLEM_SOLUTION = `
class BlogPost {
    render() {
        this.beforeContent();
        this.content();    
        this.afterContent();
    }
    content() {
        // Dynamic content
    }
}
`;

export default Route.extend({
  model() {
    return {
      'blog-post': BLOG_POST_ORIGINAL,
      'blog-posts-list': BLOG_POSTS_LIST_ORIGINAL,
      'blog-post-solution': BLOG_POST_SOLUTION,
      'blog-posts-list-solution': BLOG_POSTS_LIST_SOLUTION,
      'oop-problem': OOP_PROBLEM_ANALOG,
      'oop-solution': OOP_PROBLEM_SOLUTION
    }
  }
});
