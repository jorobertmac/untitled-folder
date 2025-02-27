const list = document.querySelector("ul")
const input = document.querySelector("#item")
const button = document.querySelector("#add-item")

function addItem (ipt) {
  const item = ipt.value
  ipt.value = ""

  const listItem = document.createElement("li")
  const span = document.createElement("span")
  const btn = document.createElement("button")

  listItem.appendChild(span)
  listItem.appendChild(btn)
  span.textContent = item
  btn.textContent = "Delete"
  list.appendChild(listItem)
  input.focus()
  btn.addEventListener("click", () => {
    list.removeChild(listItem)
  })
}

button.addEventListener("click", () => {
  addItem(input)
})