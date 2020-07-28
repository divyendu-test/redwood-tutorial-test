import PeopleLayout from 'src/layouts/PeopleLayout'
import EditPersonCell from 'src/components/EditPersonCell'

const EditPersonPage = ({ id }) => {
  return (
    <PeopleLayout>
      <EditPersonCell id={id} />
    </PeopleLayout>
  )
}

export default EditPersonPage
