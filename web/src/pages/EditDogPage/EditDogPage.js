import DogsLayout from 'src/layouts/DogsLayout'
import EditDogCell from 'src/components/EditDogCell'

const EditDogPage = ({ id }) => {
  return (
    <DogsLayout>
      <EditDogCell id={id} />
    </DogsLayout>
  )
}

export default EditDogPage
