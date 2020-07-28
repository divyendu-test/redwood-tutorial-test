import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PersonForm from 'src/components/PersonForm'

const CREATE_PERSON_MUTATION = gql`
  mutation CreatePersonMutation($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`

const NewPerson = () => {
  const { addMessage } = useFlash()
  const [createPerson, { loading, error }] = useMutation(
    CREATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.people())
        addMessage('Person created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPerson({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Person</h2>
      </header>
      <div className="rw-segment-main">
        <PersonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPerson
