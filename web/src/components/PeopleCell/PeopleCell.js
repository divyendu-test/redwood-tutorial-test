import { Link, routes } from '@redwoodjs/router'

import People from 'src/components/People'

export const QUERY = gql`
  query PEOPLE {
    people {
      id
      first
      last
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No people yet. '}
      <Link to={routes.newPerson()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ people }) => {
  return <People people={people} />
}
