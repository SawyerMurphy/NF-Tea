function loadValues() {
    let params = new URLSearchParams(location.search);
    let name = params.get('lname')+", "+params.get('fname');
    let address = params.get('houseNo')+" "+ params.get('street')+" "+ params.get('city')+", "+ params.get('pCode');
    let education=params.get("education");
    let age=params.get("age");
    let position=params.get("position");
    let salary=params.get("salary");

    document.getElementById('name').innerHTML = name;
    document.getElementById('address').innerHTML = address;
    document.getElementById('age').innerHTML = age;
    document.getElementById('salary').innerHTML = salary;
    document.getElementById('education').innerHTML = education;
    document.getElementById('position').innerHTML = position;
}