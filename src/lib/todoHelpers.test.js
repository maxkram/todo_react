import {addTodo} from './todoHelpers'
test("addTodo должен пройти этот тест", () => {
  const startTodos = [
    {id:1, name:'один', isComplete:false},
    {id:2, name:'два', isComplete:false}
  ]
  const newTodo = {id:3, name:'три', isComplete:false}
  const expected = [
    {id:1, name: 'один', isComplete:false},
    {id:2, name: 'два', isComplete:false},
    {id:3, name: 'три', isComplete:false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).toEqual(expected)
})

test("addTodo не должен менять существующий массив todo", () => {
  const startTodos = [
    {id:1, name: "один", isComplete:false},
    {id:2, name: "два", isComplete:false}
  ]
  const newTodo = {id:3, name: "три", isComplete:false}
  const expected = [
    {id:1, name: "один", isComplete:false},
    {id:2, name: "два", isComplete:false},
    {id:3, name: "три", isComplete:false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).not.toBe(startTodos)
})
