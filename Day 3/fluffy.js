var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   //console.log(cat);

   //Add height and weight to Fluffy

   cat.height = 2;
   cat.weight = 4;

   //Fluffy name is spelled wrongly. Update it to Fluffyy

   cat.name = "Fluffyy"
   //console.log(cat);

   //List all the activities of Fluffyy’s catFriends

   for(let i =0; i<cat.catFriends.length; i++){
       for(let j =0; j<cat.catFriends[i].activities.length; j++){
          // console.log(cat.catFriends[i].activities[j])
       }
   }

   //Print the catFriends names.
 for(let i=0; i<cat.catFriends.length; i++){
    // console.log(cat.catFriends[i].name)
 }

 //Print the total weight of catFriends
 w = 0
for(let i=0; i<cat.catFriends.length; i++){
    w += cat.catFriends[i].weight
}
console.log(w)

//Print the total activities of all cats (op:6)
for(let k =0; k<cat.activities.length; k++){
//console.log(cat.activities[k])
}
for(let i =0; i<cat.catFriends.length; i++){
    for(let j =0; j<cat.catFriends[i].activities.length; j++){
       //console.log(cat.catFriends[i].activities[j])
    }
}

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("lick paw")
cat.catFriends[0].activities.push("chase mouse")
cat.catFriends[1].activities.push("pur")
cat.catFriends[1].activities.push("waggle tail")

//Update the fur color of bar
for(let i=0; i<cat.catFriends.length; i++){
    if(cat.catFriends[i].name == "bar"){
        cat.catFriends[i].furcolor = "grey"
    }
}


console.log(cat)