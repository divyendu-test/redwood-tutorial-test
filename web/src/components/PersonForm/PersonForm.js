import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PersonForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.person?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="first"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First
        </Label>
        <TextField
          name="first"
          defaultValue={props.person?.first}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="first" className="rw-field-error" />

        <Label
          name="last"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last
        </Label>
        <TextField
          name="last"
          defaultValue={props.person?.last}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="last" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PersonForm
