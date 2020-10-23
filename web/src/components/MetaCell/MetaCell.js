export const QUERY = gql`
  query {
    prismaVersion
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({prismaVersion, redwood: {version}}) => {
  return <>
    <div>
      Redwood Version: {version}
    </div>
    <div>
      Prisma Version: {prismaVersion}
    </div>
  </>
}
