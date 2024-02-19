let input = document.getElementById("input")
let ul = document.getElementById("ul")

const addToList = () => {
    const li = document.createElement("li")
    const button = document.createElement("button")

    li.appendChild(document.createTextNode(input.value))
    button.appendChild(document.createTextNode("Hapus"))
    button.addEventListener('click', function deleteItem(item){
        item.target.parentElement.remove()
    })
    li.appendChild(button)
    ul.appendChild(li)
}