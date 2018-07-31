class comments{
    private comText: string;
    private comUser: string;
    private replyCount: number;
    private comLikes: number;
    private comDislikes: number;
    private comDate: string;
   
constructor(
    comText: string,
    comUser: string,
    replyCount: number,
    comLikes: number,
    comDislikes: number,
    comDate: string
)
{
    this.comText= comText;
    this.comUser= comUser;
    this.replyCount= replyCount;
    this.comLikes= comLikes;
    this.comDislikes= comDislikes;
    this.comDate= comDate;
    
}

}
class video{
    private id: string;
    private title: string;
    private numberViews: number;
    private uploader: string;
    private numberSubscribers: number;
    private likes: number;
    private dislikes: number;
    private description: string;
    private datePublished: string;
    private artist: string;
    private album: string;
    private category: string;
    private licensedBy: string;
    private videoComments: comments[]=[];

    constructor(
        id: string,
        title: string,
        numberViews: number,
        uploader: string,
        numberSubscribers: number,
        likes: number,
        dislikes: number,
        description: string,
        datePublished: string,
        artist: string,
        album: string,
        category: string,
        licensedBy: string,
        

    )
{
    this.id=id;
    this.title=title;
    this.numberViews=numberViews;
    this.uploader=uploader;
    this.numberSubscribers=numberSubscribers;
    this.likes=likes;
    this.dislikes=dislikes;
    this.description=description;
    this.datePublished=datePublished;
    this.artist=artist;
    this.album=album;
    this.category=category;
    this.licensedBy=licensedBy;
}
getVideoComment(): comments[] {
    return this.videoComments;
}
setVideoComments(videoComments: comments[]) {
    this.videoComments=videoComments;
}
getId(){
    return this.id;
}
getTitle(){
    return this.title;
}
getnumberViews(){
    return this.numberViews;
}
getLikes(){
    return this.likes;
}
getDislikes(){
    return this.dislikes;
}
getDescription(){
    return this.description;
}
getArtist(){
    return this.artist;
}

 //have intentionally not added getters for others so that the essence of private is not lost. 

}

 



let com1 = new comments("Nice one!", "iAmTony", 42,24,67,"2 months ago");
let com2 = new comments("This is crazy!!", "iAmNot", 23,78,7,"4 months ago");
// console.log(com1.getComText());
let anotherYear= new video("ukAJy_ivSXU","Another Year",111000,"Sumerian Records",1400000,7400,147,"the joy of motion","Mar 19 2014","Animals as Leaders","joy of motion","music","WMG")

let videoComments: comments[]=[];
videoComments[0]=com1;
videoComments[1]=com2;
anotherYear.setVideoComments(videoComments);
console.log(anotherYear);





