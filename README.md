# My Portfolio
This project was created to showcase some of my skills as a software engineer. Check it out [here](https://maryfrancesu.github.io/Portfolio/)!

<br>

## 開発者用
### Deploying Updates to GitHub Pages
After committing updates to the master branch, run `npm run deploy`.

### Deploying a Single-Page React App to GitHub Pages
Using React's Browser Router often doesn't work with GitHub Pages as GHP doesn’t support routers that use the HTML5 pushState history API under the hood. I have employed [Rafael Pedicini's guide](https://github.com/rafgraph/spa-github-pages#readme) to help get around this problem.

1. Create a file called `404.html` within the public folder.

    a.  Its contents should be [like so](https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html).
   
    b. Within this file, set `pathSegmentsToKeep` to `1` in the in order to keep /repo-name in the path after the redirect.
   
2. Within the `index.html` file also within the public folder, add the following [redirect script](https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html#L21-L42). Note that the redirect script must be placed before your single page app script in your index.html file.  

3. Tell the React Router to use the repo-name as the basename, for example `<BrowserRouter basename="/repo-name" />`.
