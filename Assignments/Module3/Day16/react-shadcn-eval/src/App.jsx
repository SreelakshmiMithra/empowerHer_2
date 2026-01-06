import FeedbackForm from "./components/FeedbackForm"
import ImageSlideshow from "./components/ImageSlideshow"
import TodoApp from "./components/TodoApp"

export default function App() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}


