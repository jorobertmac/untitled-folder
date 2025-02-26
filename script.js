const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!"

const para = document.createElement("p")
para.textContent = "Hey I'm red!"
para.style.color = "red"

const heading3 = document.createElement("h3")
heading3.textContent = "I'm a blue h3"
heading3.style.color = "blue"

const div = document.createElement("div")
div.setAttribute("style", "border: 2px solid black; background-color: pink") 

const divHeading = document.createElement("h1")
divHeading.textContent = "I'm in a div"
div.appendChild(divHeading)

const divPara = document.createElement("p")
divPara.textContent = "ME TOO!"
div.appendChild(divPara)

container.appendChild(content)
container.appendChild(para)
container.appendChild(heading3)
container.appendChild(div)

const btn1 = document.querySelector("#btn1")
btn1.onclick = () => alert("Hello World")

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
  alert("Hello World")
})

btn2.addEventListener("click", function (e) {
  e.target.style.background = "blue"
})

const buttons = document.querySelectorAll("div button")
buttons.forEach((button) => {
  button.addEventListener("mouseup", () => {
    alert(button.id)
  })
})