import './style.css'

class Editor {
  private content: string = "Welcome to Cursor!";

  constructor(private readonly element: HTMLDivElement) {
    document.addEventListener('keydown', (event) => {
      this.content += event.key;
      this.render();
    });
    this.render();
  }

  private render() {
    this.element.textContent = this.content;
  }

}

const el = document.getElementById("editor") as HTMLDivElement
new Editor(el);
