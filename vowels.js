// count the vowels

var Count_Vowels= (S) => 
{
    let count=0;
    count= S.match(/[aeiou]/gi).length;
    return count;
};