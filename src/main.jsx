import { createRoot } from "react-dom/client"
import { App } from "./RootCmp"
import "./assets/style/main.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
 
      <App />
   
)
