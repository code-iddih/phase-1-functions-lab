// Code your solution in this file!

// Returns the number of blocks from Scuber's headquarters to the pickup location

function distanceFromHqInBlocks(block) {
    const hq = 42; // Headquarters location

    // Calculate the distance from headquarters
    let result = Math.abs(block - hq);

    return result;
}

// Returns the number of feet from Scuber's headquarters to the pickup location

function distanceFromHqInFeet(block1) {

    // Calculate the distance from headquarters in feets
    let result2 = distanceFromHqInBlocks(block1) * 264;

    return result2;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block — 

function distanceTravelledInFeet(start, destination) {

    // Calculate the distance in feet given two block positions
    let result3 = Math.abs(start - destination) * 264

    return result3;
}

// Return the fare for the customer based on the feet coveered

function calculatesFarePrice(startB, destinationB) {
    let result4 = distanceTravelledInFeet(startB, destinationB);

    if (result4 > 2500) {
        return "cannot travel that far";

    } else if (result4 > 2000) {
        return 25;

    } else if (result4 > 400 && result4 <= 2000) {
        return 2.56;
        
    } else {
        return 0;
    }
}