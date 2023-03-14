// **Assignment # 06**

// Question # 1

// var firstName = prompt("Enter your first name")
// var secondName = prompt("Enter your second name")
// var fullName = ('Hello ' + firstName + " " + secondName)
// alert(fullName)

// Question # 2

// var favMobile = prompt("Enter your favorite mobile")
// for (var i = 0; i < favMobile.length; i++) {}
// console.log('lenght of input is ' + i)

// Question # 3

// var str = 'pakistani'
// console.log('Index is ' + str.indexOf('n'))

// Question # 4

// var str = ' Hello world'
// console.log('Last Index of l is ' + str.lastIndexOf('l'))

// Question # 5

// var str = 'Pakistani'
// console.log(str.indexOf[1])
// confusion

// Question # 6

// var firstName = 'Anas'
// var secondName = 'Ansari'
// console.log(firstName.concat(" ", secondName))

// Question # 7

// var cityName = 'Islamabad'
// console.log(cityName)
// console.log("After replacement " + cityName.replace('Islam', 'Hyder'))

// Question # 8

// var str = 'Ali and Sami are best friends. They play cricket and football together'
// console.log(str.replaceAll('and', '&'))

// Question # 9

// var num = 420
// console.log(num.toString())

// Question # 10

// var str = 'peanuts'
// console.log(str.toUpperCase())

// Question # 11

// var str = 'javascript'
// var firstLetter = str.split("")
// var capLetter = firstLetter[0].toUpperCase()
// console.log(capLetter + str.slice(1))


// Question # 12

// var num = 36.34
// var str = num.toString()
// console.log(str.replace(".", ""))

// Question # 13

// username = prompt("Enter your username: ");
// let isValid = false;

// for (; !isValid;) {

//     for (let i = 0; i < username.length; i++) {
//         if (username.charCodeAt(i) === 64 || username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46) {
//             isValid = false;
//             break;
//         } else {
//             isValid = true;
//         }
//     }

//     if (!isValid) {
//         alert("Invalid username! Please enter a valid username without '@', '.', ',', or '!'")
//     }
// }

// console.log("Your username is:", username);


// Question # 14

// var items = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties']
// var userInput = prompt("Enter Items")
// var lowerCaseInput = userInput.toLowerCase()
// for (var i = 0; i < items.length; i++) {
//     if (lowerCaseInput == items[i]) {
//         alert(lowerCaseInput + " is on index " + i)
//     } else if (lowerCaseInput != items[i]) {
//         alert("Sorry! " + lowerCaseInput + " is not in our bakery")
//         break
//     }
// }

// Question # 15


// for (var i = 0; i < password.length; i++) {
// var password = prompt("Enter your password")
// if (password.length != 6) {
//     console.log("It must at least 6 character long")
// }
// if (password[0] == 1 || password[1] == 2 || password[1] == 3 || password[1] == 4 || password[1] == 5 || password[1] == 6 || password[1] == 7 || password[1] == 8 || password[1] == 9 || password[1] == 0) {
//     console.log("Password can not begin with a number. Please Enter a valid password")
// }
// }



// Question # 16

// var str = "University of Karachi"
// var strSplite = str.split("")
// for (var i = 0; i < strSplite.length; i++) {
//     document.write(strSplite[i] + "<br>")
// }

// Question # 17

// var str = prompt("Enter your Input")
// console.log("Last character of input is " + str.charAt(str.length - 1))

// Question # 18

// var str = "“The quick brown fox jumps over the lazy dog"
// var word = "The"
// var count = 0
// var strSplite = str.split(" ")
// for (var i = 0; i < strSplite.length; i++) {
//     if (word[i].toLowerCase() === word.toLowerCase()) {
//         count++
//     }
// }
// console.log(count)
// const string = "The quick brown fox jumps over the lazy dog";
// const wordToFind = "the";
// const words = string.toLowerCase().split(" ");
// let count = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === wordToFind) {
//     count++;
//   }
// }

// console.log(`The word "${wordToFind}" appears ${count} times in the string.`);

// var string = "The quick brown fox jump over the lazy dog"
// var wordToFind = "the"
// var wordToFind1 = "and"
// var words = string.toLowerCase().split(" ")
// var count = 0
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToFind) {
//         count++
//     }
// }
// console.log("The accurance of word " + wordToFind + " is " + count + " times ")


// RANDOM PASSWORD GENERATOR
// var passLength = 10
// var chars = "abcdefghijklmnop890!@#qrvwEFGHIxyzABCDJKLMNOPQRSTUVWstuXYZ1234567$%^&*"
// var password = ""
// for (var i = 0; i < passLength; i++) {
//     password = password + chars.charAt(Math.floor(Math.random() * Math.floor(chars.length - 1)))
// }
// console.log(password)

// UPDATED! PASSWORD GENERATOR


// var ask = prompt("Enter what kinf of password")
// var lengthOfPassword = 12
// var smallChars = "abcdefghijklmnopqrstuvwxyz"
// var capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var mixChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var withNumbrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
// var withSpecialChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
// password = ""

// if (ask == "small") {
//     for (var i = 0; i < lengthOfPassword; i++) {
//         password = password + smallChars.charAt(Math.floor(Math.random() * Math.floor(smallChars.length)))
//     }
// }
// if (ask == "capital") {
//     for (var i = 0; i < lengthOfPassword; i++) {
//         password = password + capChars.charAt(Math.floor(Math.random() * Math.floor(capChars.length)))
//     }
// }
// if (ask == "mix") {
//     for (var i = 0; i < lengthOfPassword; i++) {
//         password = password + mixChars.charAt(Math.floor(Math.random() * Math.floor(mixChars.length)))
//     }
// }
// if (ask == "with numbers") {
//     for (var i = 0; i < lengthOfPassword; i++) {
//         password = password + withNumbrs.charAt(Math.floor(Math.random() * Math.floor(withNumbrs.length)))
//     }
// }
// if (ask == "with special chars") {
//     for (var i = 0; i < lengthOfPassword; i++) {
//         password = password + withSpecialChars.charAt(Math.floor(Math.random() * Math.floor(withSpecialChars.length)))
//     }
// }
// console.log(password)


// var len = 10
// var str = "fuashferuitgsdjkv"
// password = ""
// for (var i = 0; i < len; i++) {
//     password = password + str.charAt(Math.random() * Math.floor(str.length))
//     console.log(password)
// }


// var alphS = "abcdefghijklmnopqrstuvwxyz"
// var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var num = "01234567890"
// var sym = "~!@#$%^&*,."
// var password = ""
// var random1 = Math.random() * 25
// var round1 = Math.floor(random1)
// var random2 = Math.random() * 25
// var round2 = Math.floor(random2)
// var random3 = Math.random() * 25
// var round3 = Math.floor(random3)
// var random4 = Math.random() * 25
// var round4 = Math.floor(random4)
// var random5 = Math.random() * 25
// var round5 = Math.floor(random5)
// var random6 = Math.random() * 25
// var round6 = Math.floor(random6)
// var random7 = Math.random() * 9
// var round7 = Math.floor(random7)
// var random8 = Math.random() * 9
// var round8 = Math.floor(random8)
// var random9 = Math.random() * 10
// var round9 = Math.floor(random9)
// var random10 = Math.random() * 10
// var round10 = Math.floor(random10)
// password = alphS[round1] + alphC[round2] + num[round7] + sym[round9] + alphC[round3] + alphS[4] + alphC[round5] + num[round8] + sym[round10] + alphS[round6]
// document.write("<center>" + "<h1>" + "YOUR 10 DIGITS PASSWORD IS:" + "</h1>" + "<h2>" + password + "</h2>" + "<h3>" + '<a href="">' + "Reload To Reset Your Password." + "</h3>" + "</a>" + "</center>")



























































//