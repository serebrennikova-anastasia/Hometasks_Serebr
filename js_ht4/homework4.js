function checkProbabilityTheory(count) {
    var evenCount = 0;
    var oddCount = 0;
    var i = 0;
    
    while (i < count) {
        var rnd = Math.random();       // від 0 до 1
        rnd = rnd * 901 + 100;         // від 100 до 1000 (901 = 1000 - 100 + 1)
        rnd = Math.round(rnd); // від 100 до 1000 (округлення до цілого)
        if (rnd % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }   
        i++;
    }
    console.log("Кількість парних чисел: " + evenCount);        
    console.log("Кількість непарних чисел: " + oddCount);
    if (evenCount > oddCount) {
        console.log("Парних чисел більше");
    }   else if (evenCount  < oddCount) {
        console.log("Непарних чисел більше");
    }   else {
        console.log("Кількість парних і непарних чисел однакова");
    }       

    var evenPercent = (evenCount / count) * 100;
    var oddPercent = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + evenCount);
    console.log("Не парних чисел: " + oddCount);
    console.log("Відсоток парних: " + evenPercent.toFixed(2) + "%");
    console.log("Відсоток непарних: " + oddPercent.toFixed(2) + "%");
}
checkProbabilityTheory(1000); 

