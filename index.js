function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    return console.log(string.toUpperCase());
}
function logWhisper(string) {
    return console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate (string) {
    let noHear = "I can't hear you!";
    let yesHear = "YES INDEED!";
    let dinner = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return noHear;
    }
    else if (string.toUpperCase(string) === string) {
      return yesHear;
    }
    else if ("Let's have dinner together!" === string) {
      return dinner
    }
  }