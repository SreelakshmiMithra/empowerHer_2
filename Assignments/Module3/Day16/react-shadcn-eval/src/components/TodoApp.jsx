import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, { text: todo, done: false }])
    setTodo("")
  }

  return (
    <Card className="p-4">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold">Todo List</h2>

        <div className="flex gap-2">
          <Input
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox
              checked={t.done}
              onCheckedChange={() => {
                const newTodos = [...todos]
                newTodos[i].done = !newTodos[i].done
                setTodos(newTodos)
              }}
            />
            <span className={t.done ? "line-through" : ""}>
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
