//Problem 169: Majority Element in an Array

function majorityElement(nums: number[]): number {
    const uniqueElements: number[] = [...new Set(nums)];
    const numsLength: number = nums.length;

    for(let i = 0; i < uniqueElements.length; i++) {
        const numsCount: number = nums.filter(x => x==uniqueElements[i]).length;
        if(numsCount > numsLength / 2) {
            return uniqueElements[i];
        }
    }
    return 0;
};