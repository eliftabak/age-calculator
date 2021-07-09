function ageCalculator() {
 //JUST CALCULATING AGE
 // let dateOfBirth = document.getElementById("bday").value;
 // let usersDateOfBirth = new Date(dateOfBirth);
 // let monthDiff = Date.now() - usersDateOfBirth.getTime();
 // let convertedAgeDiffInDateForm = new Date(monthDiff);
 // let year = convertedAgeDiffInDateForm.getFullYear();
 // let age = Math.abs(year - 1970);
 // console.log(monthDiff);
 // return (document.getElementById("resultContainer").innerHTML =
 //  "You are " + age + " years old");

 var dateOfBirth = document.getElementById("bday").value;
 var usersDateOfBirth = new Date(dateOfBirth);
 var usersBirthYear = usersDateOfBirth.getYear();
 var userBirthMonth = usersDateOfBirth.getMonth();
 var userBirthDay = usersDateOfBirth.getDate();
 var currentDate = new Date();
 var currentYear = currentDate.getYear();
 var currentMonth = currentDate.getMonth();
 var currentDay = currentDate.getDate();
 var age = {};
 var ageString = "";
 yearAge = currentYear - usersBirthYear;
 if (currentMonth >= userBirthMonth) {
  var monthAge = currentMonth - userBirthMonth;
 } else {
  yearAge--;
  var monthAge = 12 + currentMonth - userBirthMonth;
 }
 if (currentDay >= userBirthDay) {
  var dayAge = currentDay - userBirthDay;
 } else {
  monthAge--;
  var dayAge = 31 + currentDay - userBirthDay;
 }
 if (monthAge < 0) {
  monthAge = 11;
  yearAge--;
 }
 age = {
  years: yearAge,
  months: monthAge,
  days: dayAge,
 };
 if (age.years > 0 && age.months > 0 && age.days > 0)
  ageageString =
  age.years +
  " years, " +
  age.months +
  " months, and " +
  age.days +
  " days old.";
 else if (age.years == 0 && age.months == 0 && age.days > 0)
  ageString = "Only " + age.days + " days old!";
 //when current month and date is same as birth date and month
 else if (age.years > 0 && age.months == 0 && age.days == 0)
  ageString = age.years + " years old. Happy Birthday!!";
 else if (age.years > 0 && age.months > 0 && age.days == 0)
  ageString = age.years + " years and " + age.months + " months old.";
 else if (age.years == 0 && age.months > 0 && age.days > 0)
  ageString = age.months + " months and " + age.days + " days old.";
 else if (age.years > 0 && age.months == 0 && age.days > 0)
  ageString = age.years + " years, and" + age.days + " days old.";
 else if (age.years == 0 && age.months > 0 && age.days == 0)
  ageString = age.months + " months old.";
 //when current date is same as dob(date of birth)
 else ageString = "Welcome to Earth! <br> It's first day on Earth!";

 //display the calculated age
 return (document.getElementById("resultContainer").innerHTML = ageString);
};