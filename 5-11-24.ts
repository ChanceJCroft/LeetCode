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


//Problem 88 -- Merge Sorted Array
/**
 Do not return anything, modify nums1 in-place instead.
 */

 //Needs further work/investigation -- needs to modify in place. Yuck
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    const count = nums1.filter(x => x===0).length;

    nums1.sort().splice(0,count);
};




//Problem 26 - Remove Duplicates from Sorted Array
//I was required to sort and remove duplicates from the array that was passed in, which is why I went with this approach
function removeDuplicates(nums: number[]): number {
    nums.sort(function(a,b){return a - b});

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};