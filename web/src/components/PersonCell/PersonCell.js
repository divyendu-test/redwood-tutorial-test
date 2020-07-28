import Person from 'src/components/Person'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Person not found</div>

export const Success = ({ person }) => {
  return <Person person={person} />
}
