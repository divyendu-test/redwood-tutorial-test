import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ArticleForm from 'src/components/ArticleForm'

const CREATE_ARTICLE_MUTATION = gql`
  mutation CreateArticleMutation($input: CreateArticleInput!) {
    createArticle(input: $input) {
      id
    }
  }
`

const NewArticle = () => {
  const { addMessage } = useFlash()
  const [createArticle, { loading, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.articles())
        addMessage('Article created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createArticle({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Article</h2>
      </header>
      <div className="rw-segment-main">
        <ArticleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewArticle
