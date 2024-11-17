export const fetchProfiles = async () => {
    // Simulated delay for fetching data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Akbar Sayed",
            description: "Software Engineer from India.",
            photo: "https://via.placeholder.com/100",
            location: "India",
            coordinates: { lat: 20.5937, lng: 78.9629 },
            phoneNo: 1223445565,
            age:24,
            gender: "Male",
            displayDetails:false,
          },
          {
            id: 2,
            name: "Rohit Saraf",
            description: "Designer from Brazil.",
            photo: "https://via.placeholder.com/100",
            location: "Brazil",
            coordinates: { lat: -14.235, lng: -51.9253 },
            phoneNo: 1223445565,
            age:24,
            gender: "Male",
            displayDetails:false,
          },
          {
            id: 3,
            name: "Akira Tanaka",
            description: "Photographer from New Zealand.",
            photo: "https://via.placeholder.com/100",
            location: "New Zealand",
            coordinates: { lat: -40.9006, lng: 174.886 },
            phoneNo: 6541235465,
            age:32,
            gender: "Female",
            displayDetails:false,
          },
          {
            id: 4,
            name: "Zareen khan",
            description: "Intern from Ahmednagar, India.",
            photo: "https://via.placeholder.com/100",
            location:"Ahmednagar, India",
            phoneNo: 6523445565,
            age:20,
            gender: "Female",
            displayDetails:false,
          },
        ]);
      }, 1000); // Simulates a network request delay of 1 second
    });
}