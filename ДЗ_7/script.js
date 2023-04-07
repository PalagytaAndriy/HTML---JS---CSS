btn.addEventListener('click', () => {
    if (login.value && password.value) {
        if (check.checked) {
           return alert(`Привіт  ${form.login.value}! Я запамятав тебе.`);
        } else {
           return alert(`Привіт ${form.login.value}! Я не запамятав тебе.`);
        }
    }
    alert("Введіть значення");
})