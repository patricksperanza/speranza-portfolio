import Root from "./components/Root"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import RecorderKarate from "./pages/RecorderKarate"
import FrontEndFlashcards from "./pages/FrontEndFlashcards"
import PlayfulPiano from "./pages/PlayfulPiano"
import GameHub from "./pages/GameHub"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="/recorder" element={<RecorderKarate />} />
      <Route path="/flashcards" element={<FrontEndFlashcards />} />
      <Route path="/piano" element={<PlayfulPiano />} />
      <Route path="/game" element={<GameHub />} />
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
