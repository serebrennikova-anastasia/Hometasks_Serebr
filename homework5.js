
"use strict"

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

function getServicePrice(service) // Функція для отримання ціни послуги
{
    if (services.hasOwnProperty(service)) {  // Перевірка наявності послуги

        return services[service];  // Повертаємо ціну послуги
    } else {
        return "Послуга не знайдена"; // Якщо послуга не знайдена, повертаємо повідомлення

    }
}
services["розбити скло"] = "200 грн";
services["фарбування волосся"] = "150 грн";
services["чай або кава"] = "50 грн";
function getAllServices() // Функція для отримання всіх послуг
{
    return Object.keys(services); // Повертаємо масив назв послуг
}
function convertPricesToNumbers(serviceList) {
    for (var serviceName in serviceList) {
        if (typeof serviceList[serviceName] === "string") {
            serviceList[serviceName] = Number(
                serviceList[serviceName].replace("грн", "").trim()
            );
        }
    }
}
convertPricesToNumbers(services); // Конвертуємо ціни послуг у числа
services.price = function () {
    var total = 0;
    for (var serviceName in this) {
        if (typeof this[serviceName] === "number") {
            total += this[serviceName];
        }
    }
    return total;
};
services.minPrice = function () {
    var minPrice = Infinity;
    for (var serviceName in this) {
        if (typeof this[serviceName] === "number") {
            if (this[serviceName] < minPrice) {
                minPrice = this[serviceName];
            }
        }
    }
    return minPrice === Infinity ? null : minPrice;  
};
services.maxPrice = function () {
    var maxPrice = -Infinity;
    for (var serviceName in this) {
        if (typeof this[serviceName] === "number") {
            if (this[serviceName] > maxPrice) {
                maxPrice = this[serviceName];
            }
        }
    }
    return maxPrice === -Infinity ? null : maxPrice;  
};
var selectedServices = ["гоління", "миття голови", "чай або кава"];
function calculateTotalPrice(services, selectedServices) // Функція для розрахунку загальної ціни обраних послуг
{
    var totalPrice = 0; // Ініціалізуємо загальну ціну
    for (var i = 0; i < selectedServices.length; i++) { // Проходимо по обраних послугах
        var service = selectedServices[i]; // Отримуємо назву послуги
        if (services.hasOwnProperty(service)) { // Перевіряємо, чи є така послуга
            totalPrice += parseInt(services[service]); // Додаємо ціну послуги до загальної ціни
        }
    }
    return totalPrice; // Повертаємо загальну ціну
}
console.log("Загальна вартість: " + services.price() + " грн");
console.log("Мінімальна ціна: " + services.minPrice() + " грн");
console.log("Максимальна ціна: " + services.maxPrice() + " грн");