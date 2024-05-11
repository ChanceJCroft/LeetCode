//Problem 9 -- Palindrome

function isPalindrome(x: number): boolean {
    if(x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
    }

    let newNum: number = x;
    let firstHalf: number = 0;
    while(newNum > firstHalf) {
        //Multiplying by 10 adds a trailing 0 to be added onto
        firstHalf = (firstHalf * 10) + (newNum % 10);
        newNum = Math.floor(newNum / 10);

    }

    //The second statement checks if there is one trailing digit in an odd number palindrome - i.e. 28982.
    //Checking if they are equal when removing that final digit will ensure those aren't missed.
    return newNum == firstHalf || newNum == Math.floor(firstHalf / 10);
};



//Problem 13 -- Roman to Integer
//Work on stricter typing for the future
function romanToInt(s: string): number {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total: number = 0;

    for(let i = 0; i < s.length - 1; i++) {
        if(romanNumerals[s[i]] < romanNumerals[s[i+1]]) {
            total -= romanNumerals[s[i]];
        } else {
            total += romanNumerals[s[i]]
        }
    }
    const lastInt = s[s.length - 1];

    return total + romanNumerals[lastInt];
};