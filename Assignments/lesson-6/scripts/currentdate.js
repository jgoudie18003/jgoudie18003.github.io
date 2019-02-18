var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "December"];

document.getElementById("currentdate").innerHTML = weekday[d.getDay()] + "," + month[d.getMonth() + " " + d.getDate()] + ", " + d.getFullYear();