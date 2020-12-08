
var divaSocialist = {
    name: "Adele",
    age: 25,
    hobby: "car racing",
    favoriteCars: ["Mustang", "Covert", "Porche", "Jaguar"],
    bio: function(){this.name + ' I love' + this.hobby + '. my favorites cars are:' + this.favoriteCars},
    socialistFriends: [
        {
            name: "Sarah",
            age: 26,
            favoriteCars: [
                {
                    carName: "Porche",
                    horsePower: 414
                }
            ]
        },
       {
            name: "Mike",
            age: 27,
            favoriteCars: [
                {
                    carName: "Covert",
                    horsePower: 390
                }
            ] 
       },
       {   
            name: "John",
            age: 28,
            favoriteCars: [
                {
                    carName: "Jaguar",
                    horsePower: 408
                }
            ]
       }, 
       {  
            name: "Linda",
            age: 24,
            favoriteCars: [
                {
                    carName: "Jaguar",
                    horsePower: 408
                },
            ]
        },
       {   
            name: "Sue",
            age: 28,
            favoriteCars: [
                {
                    carName: "Mustang",
                    horsePower: 380
                },

            ]
       }
    ]

}



divaSocialist.horsePower = [380, 408, 390, 414, 420]
divaSocialist.friendList = ['Sue', 'Sarah', 'John', 'Mike','Linda']
 

 divaSocialist.socialistFriends.forEach((a) => {a.letsMeet = 'Golden Globe'});
 divaSocialist.socialistFriends.forEach((a) => {a.whatTime = '1100 MT'})

 console.log(divaSocialist)