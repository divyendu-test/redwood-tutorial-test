import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ArticleForm from 'src/components/ArticleForm'

export const QUERY = gql`
  query FIND_ARTICLE_BY_ID($id: Int!) {
    article: article(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`
const UPDATE_ARTICLE_MUTATION = gql`
  mutation UpdateArticleMutation($id: Int!, $input: UpdateArticleInput!) {
    updateArticle(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ article }) => {
  const { addMessage } = useFlash()
  const [updateArticle, { loading, error }] = useMutation(
    UPDATE_ARTICLE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.articles())
        addMessage('Article updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateArticle({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Article {article.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArticleForm
          article={article}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
