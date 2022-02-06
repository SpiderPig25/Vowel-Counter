// program to count the number of vowels in a string
function update(text) {
    document.getElementById('vowelCount').innerHTML = vowels(text);
}

function vowels(text) {
    return text.split(/[aeiou]/gi).length - 1;
}