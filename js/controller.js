const controller = {};
controller.register = (data) => {

    if (data.firstName.trim() === "") { // nếu như firstName là rỗng
        document.getElementById('first-name-error').innerText = 'please input first name'
    }
    else {
        document.getElementById("first-name-error").innerText = "";
    }

    if (data.lastName === "") {
        document.getElementById('last-name-error').innerText = 'please input last name'
    }
    else {
        document.getElementById('last-name-error').innerText = ''
    }

    if (data.email === "") {
        document.getElementById('email-error').innerText = "please input email"
    }
    else {
        document.getElementById('email-error').innerText = ""
    }

    if (data.password === "") {
        document.getElementById('password-error').innerText = "please input password"
    }
    else {
        document.getElementById('password-error').innerText = ""
    }
    if (data.password.length < 6) {
        document.getElementById('password-error').innerText = "Mật khẩu tối thiểu 6 ký tự"
    }    else {
        document.getElementById('password-error').innerText = ""
    }
    if (data.confirmPassword === "") {
        document.getElementById('confirm-password-error').innerText = "please input confirm password"
    }
    else if (data.confirmPassword.trim() !== data.password.trim()) {
        document.getElementById('confirm-password-error').innerText = "Password does not match"
    }
    else {
        document.getElementById('confirm-password-error').innerText = ""
    }


    /// bươc kiểm tra điều kiện đăng kí
    if (data.firstName !== "" &&
        data.lastName !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.password === data.confirmPassword &&
        data.password.length >=6
    ) {
        model.register(data); // truyền dữ liệu mình nhập vào model.js
    }
}
controller.login = (dataLogin) => {
    if (dataLogin.email.trim() === "") {
        document.getElementById('email-error').innerText = "please input email";
    }
    else {
        document.getElementById('email-error').innerText = "";
    }

    if (dataLogin.password.trim() === "") {
        document.getElementById('password-error').innerText = "please type password";
    }
    else {
        document.getElementById('password-error').innerText = "";
    }


    if (dataLogin.email !== "" && dataLogin.password !== "") {
        model.login(dataLogin); // dữ liệu đã được lọc sạch. => gửi lên firebase xác thực
    }

}
