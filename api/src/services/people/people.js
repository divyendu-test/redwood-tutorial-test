import { db } from 'src/lib/db'

export const people = () => {
  return db.person.findMany()
}

export const person = ({ id }) => {
  return db.person.findOne({
    where: { id },
  })
}

export const createPerson = ({ input }) => {
  return db.person.create({
    data: input,
  })
}

export const updatePerson = ({ id, input }) => {
  return db.person.update({
    data: input,
    where: { id },
  })
}

export const deletePerson = ({ id }) => {
  return db.person.delete({
    where: { id },
  })
}
