const body = document.querySelector('body');
const button = document.querySelectorAll(".button")
button.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'khaki') {
            body.style.backgroundColor = "#BEB7A4";
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;        
        }
        if (e.target.id === 'coquelicot') {
            body.style.backgroundColor = "#FF3F00";           
        }
        if (e.target.id === 'reset') {
            body.style.backgroundColor = "#212121";

        }
    }

        
    )
})
