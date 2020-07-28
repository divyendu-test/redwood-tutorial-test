import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: Int!) {
    deleteArticle(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ArticlesList = ({ articles }) => {
  const { addMessage } = useFlash()
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      addMessage('Article deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id }, refetchQueries: ['ARTICLES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{truncate(article.id)}</td>
              <td>{truncate(article.title)}</td>
              <td>{truncate(article.body)}</td>
              <td>{timeTag(article.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.article({ id: article.id })}
                    title={'Show article ' + article.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editArticle({ id: article.id })}
                    title={'Edit article ' + article.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete article ' + article.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(article.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArticlesList
