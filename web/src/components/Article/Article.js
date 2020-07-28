import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: Int!) {
    deleteArticle(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Article = ({ article }) => {
  const { addMessage } = useFlash()
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.articles())
      addMessage('Article deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Article {article.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{article.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{article.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{article.body}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(article.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editArticle({ id: article.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(article.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Article
