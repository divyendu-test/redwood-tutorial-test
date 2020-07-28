import DogsLayout from 'src/layouts/DogsLayout'
import DogCell from 'src/components/DogCell'

const DogPage = ({ id }) => {
  return (
    <DogsLayout>
      <DogCell id={id} />
    </DogsLayout>
  )
}

export default DogPage
