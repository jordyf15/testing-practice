function capitalize(string){
    const input = string.split('');
    let capital = input.splice(0,1);
    capital = capital[0].toUpperCase();
    return capital + input.join('');
}
module.exports=capitalize;