import Dog from 'src/components/Dog'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Dog not found</div>

export const Success = ({ dog }) => {
  return <Dog dog={dog} />
}
