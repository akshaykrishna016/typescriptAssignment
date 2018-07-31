class myEducation{
    private school: string[];
    private college: string[];
    

    constructor(
        school:string[],
        college:string[],
        
    )
    {
        this.school=school;
        this.college=college;
        
    }
}
class myWork{
    private currentWork: string;
    private previousWork: string[];

    constructor(
        currentWork:string,
        previousWork:string[],
    )
    {
        this.currentWork=currentWork;
        this.previousWork=previousWork;
    }
}
class placesYouHaveLived{
    private currentCity: string;
    private previousCities: string[];
    private homeTown: string;

    constructor(
        currentCity: string,
        previousCities: string[],
        homeTown: string
    )
    {
        this.currentCity=currentCity;
        this.previousCities=previousCities;
        this.homeTown=homeTown;
    }
}

class about{
    private name: string;
    private id: number;
    private phoneNumber: number;
    private eMail: string;
    private aboutYou:string;
    private gender: string;
    private birthday: string;
    private address: string;
    private work: myWork;
    private education: myEducation;
    private relationStatus: string;
    private cities: placesYouHaveLived;

    constructor(
        name: string,
        id: number,
        phoneNumber: number,
        eMail: string,
        aboutYou: string,
        gender: string,
        birthday: string,
        address: string,
        work: myWork,
        education: myEducation,
        relationStatus: string,
        cities: placesYouHaveLived
    )
    {
        this.name=name;
        this.id=id;
        this.phoneNumber=phoneNumber;
        this.eMail=eMail;
        this.aboutYou=aboutYou;
        this.gender=gender;
        this.birthday=birthday;
        this.address=address;
        this.work=work;
        this.education=education;
        this.relationStatus=relationStatus;
        this.cities=cities;
    }
    getName(){  
        return this.name;
    }
    getId(){
        return this.id;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber:number){
        this.phoneNumber=phoneNumber;
    }
    getEmail(){
        return this.eMail;
    }
    setEmail(eMail:string){
        this.eMail=eMail;
    }
    getAboutYou(){
        return this.aboutYou;
    }
    getGender(){
        return this.gender;
    }
    getBirthday(){
        return this.birthday;
    }
    getAddress(){
        return this.address;
    }
    getWork(){
        return this.work;
    }
    setWork(work: myWork){
        return this.work;
    }
    getEducation(){
        return this.education;
    }
    setEducation(education: myEducation){
        return this.education;
    }
    getRelationStatus(){
        return this.relationStatus;
    }
    getCities(){
        return this.cities;
    }
    setCities(cities: placesYouHaveLived){
        return this.cities;
    }
    
}

let education= new myEducation(["Sudarshan Vidya Mandir"],["SKCH PU College","RNSIT"]);
let work= new myWork("pqr",["abc","xyz"]);
let cities= new placesYouHaveLived("Bangalore",["Tirupati","Mysore"],"Chennai");
let profile= new about("Akshay Krishna",1834791,9878675643,"abc@xyz.com","Nothing but good things","Male","25th aug 1996","Kanakapura road Bangalore",work,education,"Single",cities);
console.log(profile);
