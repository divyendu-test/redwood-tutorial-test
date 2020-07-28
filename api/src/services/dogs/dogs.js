import { db } from 'src/lib/db'

export const dogs = () => {
  return db.dog.findMany()
}

export const dog = ({ id }) => {
  return db.dog.findOne({
    where: { id },
  })
}

export const createDog = ({ input }) => {
  return db.dog.create({
    data: input,
  })
}

export const updateDog = ({ id, input }) => {
  return db.dog.update({
    data: input,
    where: { id },
  })
}

export const deleteDog = ({ id }) => {
  return db.dog.delete({
    where: { id },
  })
}
