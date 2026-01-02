const matchNumber = (matchingNumber) => {
    let randomNumber = Math.floor(Math.random() * 3);
    const og = randomNumber;

    let r;
    let sum = 0;

    while (randomNumber != 0) {
        r = Math.floor(randomNumber % 10);
        randomNumber = Math.floor(randomNumber / 10);
        sum += r;
    }

    return {
        num: og,
        sum: sum,
        matched: sum === matchingNumber ? true : false
    }
};

export default matchNumber;

