import "./app.css";

document.onmousemove = (ev) => {
    console.log(ev)

    const cursor = document.getElementsByClassName('cursors') [0];

    cursor.style.top = ev.clientY;
    cursor.style.left = ev.clientX;


}
