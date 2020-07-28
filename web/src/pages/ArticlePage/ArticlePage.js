import ArticlesLayout from 'src/layouts/ArticlesLayout'
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <ArticlesLayout>
      <ArticleCell id={id} />
    </ArticlesLayout>
  )
}

export default ArticlePage
