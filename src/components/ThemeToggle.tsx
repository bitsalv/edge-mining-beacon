
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-white hover:text-white/80 hover:bg-transparent"
    >
      <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all ${theme === 'dark' ? 'hidden' : ''}`} />
      <Moon className={`h-5 w-5 rotate-0 scale-100 transition-all ${theme !== 'dark' ? 'hidden' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
