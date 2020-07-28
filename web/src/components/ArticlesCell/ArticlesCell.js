import { Link, routes } from '@redwoodjs/router'

import Articles from 'src/components/Articles'

export const QUERY = gql`
  query ARTICLES {
    articles {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No articles yet. '}
      <Link to={routes.newArticle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ articles }) => {
  return <Articles articles={articles} />
}
