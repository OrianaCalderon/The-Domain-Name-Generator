let pronoun = ['the','our'];
let adj = ['great', 'big', 'best','cool'];
let noun = ['jogger','racoon','web','chat','weebsite'];
let direccion = ['.com','.es','.io','.es','.net','.ve'];

let pronoun_add = Math.floor(Math.random()*pronoun.length);
let adj_add = Math.floor(Math.random()*adj.length);
let noun_add = Math.floor(Math.random()*noun.length);
let direccion_add = Math.floor(Math.random()*direccion.length)

console.log(pronoun[pronoun_add]+adj[adj_add]+noun[noun_add]+direccion[direccion_add])

