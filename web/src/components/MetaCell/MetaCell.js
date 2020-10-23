export const QUERY = gql`
  query {
    prismaVersion
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({prismaVersion}) => {
  return <div>
    Prisma Version: {prismaVersion}
  </div>
}
