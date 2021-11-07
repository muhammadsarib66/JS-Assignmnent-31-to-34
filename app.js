// // CHAPTER 31 TO 34 

// // Q1 Write a program that displays current date and time in your browser.
function question1(){
var currentDate = new Date
alert(currentDate) }

// // Q2 Write a program that alerts the current month in words. For example December.
function question2(){
var month =["JANUARY", "FEBRARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY",'AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
var now = new Date
var getMonth = now.getMonth()
var toStrings = month[getMonth]
alert(`CURRENT MONTH: ${toStrings}`)}

// Q3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show
// Sun.
function question3(){
    var Day = ['sun','mon','tue','wed','thurs','fri','sat']
    var Datee = new Date 
    var currentday = Datee.getDay()
    var strings = Day[currentday]
    alert('TODAY IS "'+strings)}

   // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
    function question4(){
    var Day = ['sunday','monday','tuesday','wdnesday','thursday','friday','saturday']
    var Datee = new Date 
    var currentday = Datee.getDay()
    var strings = Day[currentday]
    console.log(strings)
    if(currentday == 0 || currentday == 6 ){
        alert('its funday bro')
    }
    else{
        alert("its not funday broo")
    }}

//     Q5. Write a program that shows the message “First fifteen  days of the month” if the date is less than 16th of the month else shows “Last days of the month ”

function question5(){
var date = new Date
var cDate = date.getDate()
console.log(cDate)
if(cDate <= 15 ){
    alert('First fifteen days of the month')
}
else if( cDate >= 16){
    alert('Last days of the month')
}}

//  Q6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
function question6(){
date = new Date 
var time = date.getMilliseconds()
alert(time)}

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
function question7(){
var date = new Date
var hour = date.getHours()

console.log(hour)
if( hour <=12){
    alert(`its ${hour} am`)
}
else if( hour >=13){
    alert(`its ${hour} pm`)
}}


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

function question8(){var d = new Date
d.setUTCFullYear(2000), d.setMonth(11), d.setDate(31), d.setHours(00)
alert('later date : '+d) }

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

function question9(){   
     var d = new Date 
    var rdate = new Date('june 15, 2015')
    console.log(d)
    console.log(rdate)
    var pass = d.getFullYear()  -rdate.getFullYear() 
    var dpass = pass *365
        console.log(` years: ${pass}`)
        console.log(` ${dpass} days passed since 15june 2015 `)}

//     10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
    function question10(){
    var date = new Date 
    var setDate = new Date ("jan 1, 2021, 00:00:00")
    console.log(setDate)
    var cal = date - setDate 
    var call = cal /(1000*60)
    call = Math.floor(call)

    document.write(`<br> On reference date${setDate}<br>`)
    document.write(`<br>${call} second has passed since beginning 2020<br>`)}

//     11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

   function question11(){var date = new Date  
    var datte = new Date 
    datte.setHours(datte.getHours()-1)
    
    document.write(`<br> current time: ${date}<br>`)
    document.write(`<br>1 hour previouse time: ${datte}<br>`)}


//     12. Write a program that creates a date object and show the  date in an alert box that is reset to 100 years back?
    
    function question12(){var date = new Date  
    var datte = new Date 
    datte.setFullYear(datte.getFullYear()-100)
    
    document.write(`<br> current time: ${date}<br>`)
    document.write(`<br>100 years back: ${datte}<br>`)}

    //Q13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

   function question13(){ var date = new Date
    var dob = +prompt('enter your Age year')
    var b = date.setFullYear(date.getFullYear()-dob)
    document.write(`your birthday year is  ${date.getFullYear()}`)}

//     14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


function question14(){var head = document.createElement('h1')
head.innerText = '<br>K ELECTRIC BILL'
document.write( '<br>'+ head.innerText+ '<br>')

var cName = prompt('ENter your name')
var month =["JANUARY", "FEBRARY", "MARCH", "APRIL", "MAY", "JUNE",
            "JULY",'AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
var now = new Date
var getMonth = now.getMonth()
var toStrings = month[getMonth]
var unit = +prompt('enter number of unit used in this month')
var tunit = unit*16
var unitcharge = 'charge per unit = 16'

document.write('<br>Customer Name : '+cName)
document.write(`<br> CURRENT MONTH: ${toStrings}`)
document.write(`<br>Number of units : ${unit}`)
document.write( '<br>'+unitcharge + '<br>')
document.write(`<br> Net Amount Payable(Within Due) : ${tunit}`)
document.write('<br>Late Payment Surcharge : 350')
document.write(`<br>Gross Amount Payable : ${tunit + 350}`)}


    