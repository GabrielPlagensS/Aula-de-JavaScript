let cachorro ={
    patas:4,
    raca:'SRD',
    latir: function(){
        console.log("au au");
    }
}

let labrador = object.create(cachorro);

labrador.latir();

labrador.raca = "labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = object.creat(cachorro);

pastor.raca

console.log(pastor.raca);