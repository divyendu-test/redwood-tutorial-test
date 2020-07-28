// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/dogs/new" page={NewDogPage} name="newDog" />
      <Route path="/dogs/{id:Int}/edit" page={EditDogPage} name="editDog" />
      <Route path="/dogs/{id:Int}" page={DogPage} name="dog" />
      <Route path="/dogs" page={DogsPage} name="dogs" />
      <Route path="/people/new" page={NewPersonPage} name="newPerson" />
      <Route path="/people/{id:Int}/edit" page={EditPersonPage} name="editPerson" />
      <Route path="/people/{id:Int}" page={PersonPage} name="person" />
      <Route path="/people" page={PeoplePage} name="people" />
      <Route path="/articles/new" page={NewArticlePage} name="newArticle" />
      <Route path="/articles/{id:Int}/edit" page={EditArticlePage} name="editArticle" />
      <Route path="/articles/{id:Int}" page={ArticlePage} name="article" />
      <Route path="/articles" page={ArticlesPage} name="articles" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
        <Route
          path="/admin/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/admin/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
