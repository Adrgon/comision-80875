function miniAlert(title, text=""){
    const ov = document.createElement("div");
    ov.className = "m-ov";
    const box = document.createElement("div");
    box.className = "m-box"

    box.innerHTML = `
    <div class="m-tit">${title}</div>
    <div class="m-txt">${text}</div>
    <button class="m-btn">Aceptar</button>
    `;
    ov.appendChild(box)
    document.body.appendChild(ov)

    const close = ()=> ov.remove()

    box.querySelector('.m-btn').onclick = close;

    ov.onclick = (e)=> e.target === ov && close() 
}
