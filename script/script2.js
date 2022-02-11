const names = document.querySelector("#fname");
const author = document.querySelector("#lname");
const details = document.querySelector("#details")
var head = document.querySelector(".red-head");


if (localStorage.getItem("todos") === null) {

    const booksList = []
    localStorage.setItem("todos", JSON.stringify(booksList));
    location.reload();
} else {
    const booksList = JSON.parse(localStorage.getItem("todos"))
    window.addEventListener("DOMContentLoaded", () => {
        booksList.forEach((content) => {
            render(content);
        })
    })


    function render(element) {
        const list = document.querySelector('table');
        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${element.book}</td>
      <td>${element.author}</td>
      <td>${element.details}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete" onclick="remove(this)">X</a></td>
    `;
        list.appendChild(row);
    }

    function submit() {

        if (names.value === "" && author.value === "" && details.value === "") {
            alert("Please fill the text box!")
            return
        }

        render({
            book: names.value,
            author: author.value,
            details: details.value
        })
        booksList.push({
            book: names.value,
            author: author.value,
            details: details.value
        });
        localStorage.setItem("todos", JSON.stringify(booksList));

        head.style.display = "block"
        head.innerHTML = "Book Added"
        
        setTimeout(() => {
            head.style.display = "none"
        }, 3000);

        names.value = ""
        author.value = ""
        details.value = ""
    }

    function remove(id) {
        document.querySelectorAll(".btn").forEach((element, value) => {
            if (id === element) {
                console.log("kamlesh");
                booksList.splice(value, 1);
            }
        })

        id.parentNode.parentNode.remove();
        head.style.display = "block"
        head.innerHTML = "Book Removed"

        setTimeout(() => {
            head.style.display = "none"
        }, 3000);


        localStorage.setItem("todos", JSON.stringify(booksList));
    }
}