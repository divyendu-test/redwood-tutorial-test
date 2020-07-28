import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DogForm from 'src/components/DogForm'

const CREATE_DOG_MUTATION = gql`
  mutation CreateDogMutation($input: CreateDogInput!) {
    createDog(input: $input) {
      id
    }
  }
`

const NewDog = () => {
  const { addMessage } = useFlash()
  const [createDog, { loading, error }] = useMutation(CREATE_DOG_MUTATION, {
    onCompleted: () => {
      navigate(routes.dogs())
      addMessage('Dog created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createDog({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Dog</h2>
      </header>
      <div className="rw-segment-main">
        <DogForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDog
