/*

Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.

2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.


Function Description

Complete the vowelsAndConsonants function in the editor below.
vowelsAndConsonants has the following parameters:

string s: the string to process

Prints
Print each vowel of s in order on a new line, then print each consonant in order on a new line. Return nothing.

Input Format
There is one line of input with the string s.

Output Format

First, print each vowel in s on a new line (in the same order as they appeared in s). 
Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s). */


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
   var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < s.length; i++){
        if (vowels.indexOf(s[i]) > -1){
            console.log(s[i]);
        }
    }    
    for (var j = 0; j < s.length; j++){
        if (vowels.indexOf(s[j]) < 0){
            console.log(s[j]);
        }
    }
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

