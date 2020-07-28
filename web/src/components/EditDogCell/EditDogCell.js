import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DogForm from 'src/components/DogForm'

export const QUERY = gql`
  query FIND_DOG_BY_ID($id: Int!) {
    dog: dog(id: $id) {
      id
      name
      color
      createdAt
    }
  }
`
const UPDATE_DOG_MUTATION = gql`
  mutation UpdateDogMutation($id: Int!, $input: UpdateDogInput!) {
    updateDog(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ dog }) => {
  const { addMessage } = useFlash()
  const [updateDog, { loading, error }] = useMutation(UPDATE_DOG_MUTATION, {
    onCompleted: () => {
      navigate(routes.dogs())
      addMessage('Dog updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateDog({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Dog {dog.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DogForm dog={dog} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
