navigation = document.querySelector("#slash");
setInterval(() => {
    navigation.style.width = "8px";
    setTimeout(() => {
        navigation.style.width = "0px";

    }, 1000);
}, 2000);
const navigator = document.querySelector("#slash2")
setInterval(() => {
    navigator.style.width = "8px";
    setTimeout(() => {
        navigator.style.width = "0px";

    }, 1000);
}, 2000);


const root = document.querySelector("*");
const anchor = document.querySelectorAll("a");
const boxes = document.querySelectorAll(".box-area li");

function ToDarkMode() {
    root.style.backgroundColor = "black";
    root.style.color = "white";
    anchor.forEach(elem => {
        elem.style.color = "white";
    })
    document.querySelector("footer a").style.borderBottom = "1px solid lightgrey";
    boxes.forEach(box => {
        box.style.backgroundColor = "rgba(255,255,255,0.10)";
    })
    document.querySelector("#contact-Form").style.backgroundColor = "#1f1f1f";
    let inputs = document.querySelectorAll('.hoverInput');
    inputs.forEach(inp => {
        inp.style.color = "white";
        inp.style.borderBottom = "1px solid rgba(0,0,0,0.25)";
    })
    document.querySelector("#SubmitBtn").style.color = "white";
    document.querySelector("#SubmitBtn").style.border = "1px solid white";
    document.querySelector("#SubmitBtn").addEventListener('mouseout', () => {
        document.querySelector("#SubmitBtn").style.color = "white";
    })
    document.querySelector("#SubmitBtn").addEventListener('mouseover', () => {
        document.querySelector("#SubmitBtn").style.color = "#1f1f1f";
    })
    document.querySelector("#contact-Form .icon").style.color = "white";
    document.querySelector("#contact-Form .icon").style.backgroundColor = "#1f1f1f";
    document.querySelector("#contact-Form .icon").style.border = "1px solid rgba(255,255,255,0.27)";

}

function ToLightMode() {
    root.style.backgroundColor = "white";
    root.style.color = "black";
    anchor.forEach(elem => {
        elem.style.color = "black";
    })
    document.querySelector("footer a").style.borderBottom = "1px solid #1f1f1f";
    boxes.forEach(box => {
        box.style.backgroundColor = "rgba(0,0,0,0.15)";
    })
    document.querySelector("#contact-Form").style.backgroundColor = "#afafaf";
    let inputs = document.querySelectorAll('.hoverInput');
    inputs.forEach(inp => {
        inp.style.color = "black";
        inp.style.borderBottom = "1px solid rgba(0,0,0,0.25)";
    })
    document.querySelector("#SubmitBtn").style.color = "#1f1f1f";
    document.querySelector("#SubmitBtn").style.border = "1px solid #1f1f1f";
    document.querySelector("#contact-Form .icon").style.color = "white";
    document.querySelector("#contact-Form .icon").style.backgroundColor = "#afafaf";
    document.querySelector("#contact-Form .icon").style.border = "1px solid rgba(31,31,31,0.27)";
}

document.querySelector("header i").click();

function DarkModeToggle(e) {
    if (e.querySelector("i").classList.contains('fa-moon')) {
        ToDarkMode();
        document.querySelector("header .icon i").classList.remove("fa-moon");
        document.querySelector("header .icon i").classList.add("fa-sun");
    } else {
        ToLightMode();
        document.querySelector("header .icon i").classList.remove("fa-sun");
        document.querySelector("header .icon i").classList.add("fa-moon");
    }
}

document.querySelector("#contact-Form > .icon").addEventListener('click', () => {
    window.document.title = "Portfolio | Abhay Gupta";
    document.querySelector("#contact-Form").classList.remove("show");
    document.querySelector("#contact-Form > .icon").classList.remove("show");

})
document.querySelector("#form-toggle").addEventListener('click', () => {
    window.document.title = "Contact | Abhay Gupta";
    document.querySelector("#contact-Form").classList.add("show");
    document.querySelector("#contact-Form > .icon").classList.add("show");
})



// FORM
const inputs = document.querySelectorAll(".hoverInput");
// console.log(inputs);
inputs.forEach(element => {
    element.addEventListener('focusin', (e) => {
        e.target.labels[0].querySelector("div").style.top = "-25px";
    })
    element.addEventListener('focusout', (e) => {
        if (!e.target.value) {
            e.target.labels[0].querySelector("div").style.top = "0px";
        }
    })
});


document.querySelector("#contactForm").onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((memo, pair) => ({
        ...memo,
        [pair[0]]: pair[1],
    }), {});

    putData(data);
}
async function putData(data) {
    const config = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    let resp = await fetch('https://sheet.best/api/sheets/e0955054-83b8-4f7d-a6ec-c919d09f7638', config);
    data = await resp.json()
    document.querySelector("#contactForm").remove()
    document.querySelector(".displayData").classList.toggle("hide")
    document.querySelector("#contact-Form > h2").remove()
}

document.querySelector("#resumeToggle").addEventListener('click', () => {
    window.location ="./resume.pdf"
})

window.document.title = "Portfolio | Abhay Gupta";