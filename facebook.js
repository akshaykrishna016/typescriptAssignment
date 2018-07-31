var myEducation = /** @class */ (function () {
    function myEducation(school, college) {
        this.school = school;
        this.college = college;
    }
    return myEducation;
}());
var myWork = /** @class */ (function () {
    function myWork(currentWork, previousWork) {
        this.currentWork = currentWork;
        this.previousWork = previousWork;
    }
    return myWork;
}());
var placesYouHaveLived = /** @class */ (function () {
    function placesYouHaveLived(currentCity, previousCities, homeTown) {
        this.currentCity = currentCity;
        this.previousCities = previousCities;
        this.homeTown = homeTown;
    }
    return placesYouHaveLived;
}());
var about = /** @class */ (function () {
    function about(name, id, phoneNumber, eMail, aboutYou, gender, birthday, address, work, education, relationStatus, cities) {
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.eMail = eMail;
        this.aboutYou = aboutYou;
        this.gender = gender;
        this.birthday = birthday;
        this.address = address;
        this.work = work;
        this.education = education;
        this.relationStatus = relationStatus;
        this.cities = cities;
    }
    about.prototype.getName = function () {
        return this.name;
    };
    about.prototype.getId = function () {
        return this.id;
    };
    about.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    about.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    about.prototype.getEmail = function () {
        return this.eMail;
    };
    about.prototype.setEmail = function (eMail) {
        this.eMail = eMail;
    };
    about.prototype.getAboutYou = function () {
        return this.aboutYou;
    };
    about.prototype.getGender = function () {
        return this.gender;
    };
    about.prototype.getBirthday = function () {
        return this.birthday;
    };
    about.prototype.getAddress = function () {
        return this.address;
    };
    about.prototype.getWork = function () {
        return this.work;
    };
    about.prototype.setWork = function (work) {
        return this.work;
    };
    about.prototype.getEducation = function () {
        return this.education;
    };
    about.prototype.setEducation = function (education) {
        return this.education;
    };
    about.prototype.getRelationStatus = function () {
        return this.relationStatus;
    };
    about.prototype.getCities = function () {
        return this.cities;
    };
    about.prototype.setCities = function (cities) {
        return this.cities;
    };
    return about;
}());
var education = new myEducation(["Sudarshan Vidya Mandir"], ["SKCH PU College", "RNSIT"]);
var work = new myWork("pqr", ["abc", "xyz"]);
var cities = new placesYouHaveLived("Bangalore", ["Tirupati", "Mysore"], "Chennai");
var profile = new about("Akshay Krishna", 1834791, 9878675643, "abc@xyz.com", "Nothing but good things", "Male", "25th aug 1996", "Kanakapura road Bangalore", work, education, "Single", cities);
console.log(profile);
