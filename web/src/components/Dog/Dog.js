import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DOG_MUTATION = gql`
  mutation DeleteDogMutation($id: Int!) {
    deleteDog(id: $id) {
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

const Dog = ({ dog }) => {
  const { addMessage } = useFlash()
  const [deleteDog] = useMutation(DELETE_DOG_MUTATION, {
    onCompleted: () => {
      navigate(routes.dogs())
      addMessage('Dog deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dog ' + id + '?')) {
      deleteDog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Dog {dog.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dog.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{dog.name}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{dog.color}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(dog.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDog({ id: dog.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dog.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Dog
