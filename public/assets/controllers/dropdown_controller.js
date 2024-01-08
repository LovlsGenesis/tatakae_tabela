import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["button", "menu"]

  connect() {
    this.buttonTarget.addEventListener('click', () => {
      this.menuTarget.classList.toggle('hidden')
    })
  }
}
