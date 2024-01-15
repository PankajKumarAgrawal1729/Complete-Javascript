const insert = document.getElementById("insert");

window.addEventListener("keydown", (ev) => {
    insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <th>${ev.key === " " ? "Space" : ev.key}</th>
    <th>${ev.keyCode}</th>
    <th>${ev.code}</th>
    </tr>
    </table>
    </div>
    `;
})