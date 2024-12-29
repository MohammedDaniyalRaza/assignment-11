import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            Designed and Developed by{" "}
            <a
              href="https://daniyalrazaportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Daniyal
            </a>
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <a
                href="https://github.com/MohammedDaniyalRaza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/mohammed-daniyal-raza-aa26b22ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}