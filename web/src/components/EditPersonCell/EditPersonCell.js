import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PersonForm from 'src/components/PersonForm'

export const QUERY = gql`
  query FIND_PERSON_BY_ID($id: Int!) {
    person: person(id: $id) {
      id
      first
      last
      createdAt
    }
  }
`
const UPDATE_PERSON_MUTATION = gql`
  mutation UpdatePersonMutation($id: Int!, $input: UpdatePersonInput!) {
    updatePerson(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ person }) => {
  const { addMessage } = useFlash()
  const [updatePerson, { loading, error }] = useMutation(
    UPDATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.people())
        addMessage('Person updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePerson({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Person {person.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PersonForm
          person={person}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
