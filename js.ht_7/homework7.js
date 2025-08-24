
/*У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри.Постарайтеся також зробити просту валідацію до @

одне, або два слова які можуть містити(латинські букви, цифри) яке може бути розділене крапкою.*/

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com>"
    },
{
    userName: "Andrii",
        lastName: "",
            email: "andrii@mail.ru" // Нам такі не підходять
},
];
var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
var trustedemails = [];
for (var i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        trustedemails.push(arr[i].email);
    }
}
console.log(trustedemails);