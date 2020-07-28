import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const PeopleLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.people()} className="rw-link">
            People
          </Link>
        </h1>
        <Link to={routes.newPerson()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Person
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PeopleLayout
