import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function FeedbackForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [submitted, setSubmitted] = useState(null)

  const handleSubmit = () => {
    setSubmitted(data)
    setData({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="p-4 mb-6">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-bold">Feedback Form</h2>

        <Input
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <Textarea
          placeholder="Feedback"
          value={data.feedback}
          onChange={(e) => setData({ ...data, feedback: e.target.value })}
        />

        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="mt-4">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
