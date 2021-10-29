const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};

let placeholder = refs.input.getAttribute("placeholder");

const changeNameInSpan = () =>  {
    if (refs.input.value === ""){
        return refs.span.textContent = "Anonymous";
    };
    return refs.span.textContent = refs.input.value
};

refs.input.addEventListener('input', changeNameInSpan );