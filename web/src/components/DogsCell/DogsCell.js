import { Link, routes } from '@redwoodjs/router'

import Dogs from 'src/components/Dogs'

export const QUERY = gql`
  query DOGS {
    dogs {
      id
      name
      color
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dogs yet. '}
      <Link to={routes.newDog()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ dogs }) => {
  return <Dogs dogs={dogs} />
}
