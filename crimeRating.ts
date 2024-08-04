interface CrimeRating {
    rating: number;
    description: string;
}

// number of crimes is taken from spotcrime database

function calculateCrimeRating(crimes: number): CrimeRating {
    if (crimes < 0) {
        throw new Error("Number of crimes cannot be negative.");
    }
    
    let rating: number;
    let description: string;

    if (crimes === 0) {
        rating = 11;
        description = "Very safe";
    } else if (crimes >= 1 && crimes <= 2) {
        rating = 22;
        description = "Safe";
    } else if (crimes >= 3 && crimes <= 5) {
        rating = 33;
        description = "Risky";
    } else {
        rating = 44;
        description = "Very risky";
    }

    return {
        rating: rating,
        description: description
    };
}