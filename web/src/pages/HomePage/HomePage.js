import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import MetaCell from 'src/components/MetaCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <BlogPostsCell />
      <MetaCell />
    </BlogLayout>
  )
}

export default HomePage
