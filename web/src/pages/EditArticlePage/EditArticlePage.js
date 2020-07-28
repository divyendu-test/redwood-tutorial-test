import ArticlesLayout from 'src/layouts/ArticlesLayout'
import EditArticleCell from 'src/components/EditArticleCell'

const EditArticlePage = ({ id }) => {
  return (
    <ArticlesLayout>
      <EditArticleCell id={id} />
    </ArticlesLayout>
  )
}

export default EditArticlePage
