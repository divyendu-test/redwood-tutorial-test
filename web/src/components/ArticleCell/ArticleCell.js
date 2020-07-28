import Article from 'src/components/Article'

export const QUERY = gql`
  query FIND_ARTICLE_BY_ID($id: Int!) {
    article: article(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Article not found</div>

export const Success = ({ article }) => {
  return <Article article={article} />
}
