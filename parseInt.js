function parseInt(str) {
    var nums = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,
    "twenty":20, "thirty":30, "forty":40, "fifty":50, "sixty":60, "seventy":70, "eighty":80, "ninety":90,};
    var largerNums = {"hundred":100, "thousand":1000, "million":1000000};

    var arr = str.split(" ");

    console.log(arr);

    total = []

    if (arr.length == 1) {
        console.log(arr[0])
        if (str.includes("-")) {
            var temp = arr[0].split("-");
            return nums[temp[0]] + nums[temp[1]];
        } 
        return nums[arr[0]];
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "and") {
            continue;
        }
        if (largerNums[arr[i]] != undefined) {
            total.push(largerNums[arr[i]])
        } else {
            if (arr[i].includes("-")) {
                var temp = arr[i].split("-");
                total.push(nums[temp[0]] + nums[temp[1]]);
            } else {
                total.push(nums[arr[i]]);
            }
        }
    }

    for (var i = 0; i < total.length; i++) {   
        if (total[i] == 100 || total[i] == 1000 || total[i] == 1000000) {
            total[i-1] = total[i-1] * total[i];
            total.splice(i, 1);
        }
    }

    console.log(total);

    for (var i = 0; i < total.length; i++) {
        if (total[i] < total[i+1]) {
            if (total[i+1] >= 10000) {
                temp = total[i] / 100
            } else {
                temp = total[i] / 10
            }
            if (total[i+1] == 1000) {
                total[i] = total[i] * 1000;
            } else {
                total[i] = Number(temp + "" + total[i+1]);
            }
            total.splice(i+1, 1);
        }
    }

    return total.reduce((a, b) => a + b, 0);

}

console.log(parseInt("two hundred three thousand")); //203000
console.log(parseInt("seven hundred eighty-three thousand")); //783000