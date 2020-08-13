let cookies = 0
let grannies = 0
let bakers = 0
let n = 0
let m = 0
let f = 0
let staff = 0
let factory = 0


function cookieSec(number) {
    cookies += number
    document.getElementById("cookies")
        .innerHTML = cookies.toFixed();
    document.getElementById(
        "cookiesper").innerHTML =
        grannies + bakers + staff +
        factory;
    document.title = cookies.toFixed() +
        " Cookies";
};

function cookieClick(number) {
    cookies = cookies + number;
    document.getElementById("cookies")
        .innerHTML = cookies;
    document.getElementById(
        "cookiesper").innerHTML =
        grannies + bakers + staff +
        factory;
    document.title = cookies +
        " Cookies";
};

function buyGranny() {
    let grannyCost = Math.floor(10 *
        Math.pow(1.1, grannies));
    if (cookies >= grannyCost) {
        grannies = grannies +
            1;
        cookies = cookies - grannyCost;
        document.getElementById("grannies")
            .innerHTML = grannies;
        document.getElementById("cookies")
            .innerHTML = cookies;
    }
    ;
    let nextCost = Math.floor(10 * Math
        .pow(1.1, grannies));
    document.getElementById(
        "grannyCost").innerHTML = nextCost;
};

function buyBaker() {
    let bakerCost = Math.floor(100 *
        Math.pow(1.03, bakers));

    if (cookies >= bakerCost) {
        bakers = bakers + 10;
        cookies = cookies - bakerCost;
        document.getElementById("bakers")
            .innerHTML = n += 1;
        document.getElementById("cookies")
            .innerHTML = cookies;
    }
    ;
    let nextCost = Math.floor(100 * Math
        .pow(1.03, bakers));
    document.getElementById(
        "bakerCost").innerHTML = nextCost;
};

function buyStaff() {
    let staffCost = Math.floor(1000 *
        Math.pow(1.007, staff));

    if (cookies >= staffCost) {
        staff = staff + 100;
        cookies = cookies - staffCost;
        document.getElementById("staff")
            .innerHTML = m += 1;
        document.getElementById("cookies")
            .innerHTML = cookies;
    }
    ;
    let nextCost = Math.floor(1000 *
        Math
            .pow(1.007, staff));
    document.getElementById(
        "staffCost").innerHTML = nextCost;
};

function buyFactory() {
    let factoryCost = Math.floor(25000 *
        Math.pow(1.0007, factory));

    if (cookies >= factoryCost) {
        factory = factory + 1000;
        cookies = cookies - factoryCost;
        document.getElementById(
            "factories")
            .innerHTML = f += 1;
        document.getElementById("cookies")
            .innerHTML = cookies;
    }
    ;
    let nextCost = Math.floor(25000 *
        Math
            .pow(1.0007, factory));
    document.getElementById(
        "factoryCost").innerHTML =
        nextCost;
};

function save() {
    localStorage.setItem("cookiecount",
        cookies);
    localStorage.setItem("granniecount",
        grannies);
    localStorage.setItem("bakercount",
        bakers);
    localStorage.setItem("staffcount",
        staff);
}

function load() {
    cookies = localStorage.getItem(
        "cookiecount");
    cookies = parseInt(cookies);
    grannies = localStorage.getItem(
        "granniecount");
    grannies = parseInt(grannies);
    document.getElementById("cookies")
        .value = cookies;
    document.getElementById("grannies")
        .value = grannies;

}


setInterval(function () {
    cookieSec(+(grannies/10).toFixed(1));
    cookieSec(bakers/10);
    cookieSec(staff/10);
    cookieSec(factory/10);
}, 100,);