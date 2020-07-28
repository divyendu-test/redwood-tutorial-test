import PeopleLayout from 'src/layouts/PeopleLayout'
import PersonCell from 'src/components/PersonCell'

const PersonPage = ({ id }) => {
  return (
    <PeopleLayout>
      <PersonCell id={id} />
    </PeopleLayout>
  )
}

export default PersonPage
