type newrimeRating = {
    rating: number;
    description: string;
  };
  
  function getCrimeRating(): CrimeRating {
    const crimes = Math.floor(Math.random() * 7); // Random number between 0 and 6
    let rating: number;
    let description: string;
  
    switch (true) {
      case crimes === 0:
        rating = 10;
        description = "Very safe";
        break;
      case crimes >= 1 && crimes <= 2:
        rating = 20;
        description = "Safe";
        break;
      case crimes >= 3 && crimes <= 5:
        rating = 40;
        description = "Risky";
        break;
      default:
        rating = 60;
        description = "Very risky";
    }
  
    return { rating, description };
  }
  