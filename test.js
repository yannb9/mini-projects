const doStuff = str =>{
    let keepers = [];
    const lower = str.toLowerCase();
    var words = str.split(' ').reverse()
    debugger;


    for (let i = 0; i < words.length; i++) {
        var word = words[i].trim();
        if (word.length > 3) {
            keepers.push(word)
        }
    }
    return keepers.join(" ");
}