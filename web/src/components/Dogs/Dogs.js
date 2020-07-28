import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_DOG_MUTATION = gql`
  mutation DeleteDogMutation($id: Int!) {
    deleteDog(id: $id) {
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

const DogsList = ({ dogs }) => {
  const { addMessage } = useFlash()
  const [deleteDog] = useMutation(DELETE_DOG_MUTATION, {
    onCompleted: () => {
      addMessage('Dog deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dog ' + id + '?')) {
      deleteDog({ variables: { id }, refetchQueries: ['DOGS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr key={dog.id}>
              <td>{truncate(dog.id)}</td>
              <td>{truncate(dog.name)}</td>
              <td>{truncate(dog.color)}</td>
              <td>{timeTag(dog.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dog({ id: dog.id })}
                    title={'Show dog ' + dog.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDog({ id: dog.id })}
                    title={'Edit dog ' + dog.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete dog ' + dog.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dog.id)}
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

export default DogsList
