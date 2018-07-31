var comments = /** @class */ (function () {
    function comments(comText, comUser, replyCount, comLikes, comDislikes, comDate) {
        var _this = this;
        this.getComText = function () {
            return _this.comText;
        };
        this.getcomUser = function () {
            return _this.comUser;
        };
        this.getcomDate = function () {
            return _this.comDate;
        };
        this.comText = comText;
        this.comUser = comUser;
        this.replyCount = replyCount;
        this.comLikes = comLikes;
        this.comDislikes = comDislikes;
        this.comDate = comDate;
    }
    return comments;
}());
var video = /** @class */ (function () {
    function video(id, title, numberViews, uploader, numberSubscribers, likes, dislikes, description, datePublished, artist, album, category, licensedBy) {
        this.videoComments = [];
        this.id = id;
        this.title = title;
        this.numberViews = numberViews;
        this.uploader = uploader;
        this.numberSubscribers = numberSubscribers;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
        this.datePublished = datePublished;
        this.artist = artist;
        this.album = album;
        this.category = category;
        this.licensedBy = licensedBy;
    }
    video.prototype.getVideoComment = function () {
        return this.videoComments;
    };
    video.prototype.setVideoComments = function (videoComments) {
        this.videoComments = videoComments;
    };
    video.prototype.getId = function () {
        return this.id;
    };
    video.prototype.getTitle = function () {
        return this.title;
    };
    video.prototype.getnumberViews = function () {
        return this.numberViews;
    };
    video.prototype.getLikes = function () {
        return this.likes;
    };
    video.prototype.getDislikes = function () {
        return this.dislikes;
    };
    return video;
}());
var com1 = new comments("Nice one!", "iAmTony", 42, 24, 67, "2 months ago");
var com2 = new comments("This is crazy!!", "iAmNot", 23, 78, 7, "4 months ago");
// console.log(com1.getComText());
var anotherYear = new video("ukAJy_ivSXU", "Another Year", 111000, "Sumerian Records", 1400000, 7400, 147, "the joy of motion", "Mar 19 2014", "Animals as Leaders", "joy of motion", "music", "WMG");
var videoComments = [];
videoComments[0] = com1;
videoComments[1] = com2;
anotherYear.setVideoComments(videoComments);
console.log(anotherYear);
