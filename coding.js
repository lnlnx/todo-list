function replaceString(text, target, replaceText) {
    const newText = text.replace(/[.,]/g,"");
    const textToString = newText.split(' ');
    let pointer = 0;
    while(pointer < textToString.length){
        for(let i = 1+pointer; i <= textToString; i++) {
            const words = textToString.slice(pointer, i).join(" ");
            if(words === target) {
                return textToString.splice(pointer, i, replaceText.split(" ")).join(" ");
            }
        }
        pointer++;
    }
    
}