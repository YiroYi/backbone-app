//const Song = Backbone.Model.extend({
//  validate: function(attrs) {
//    if(!attrs.title)
//      return "Title is required";
//  }
//});

// song.isValid() verifica si el objecto es valido o no despues de
// haberlo creado.

// song.validationError

//const song = new Song({
//    artist: "Yiro",
//  publishYear: 2021
//});

//song.set("title, "New album")
//song.get("title") obtener el titulo
//song.unset("title") eliminar un attributo del object
//song.clear() eliminar todos los atributos
//song.has("title") return a boolean if it has the attribute

// With this we can setup an attribute default when the objjjjject
// is instanciated

//const Song = Backbone.Model.extend({
//defaults: {
//genre: "Jazz"
//}
//});

//song.set('title', 'My song');
//song.set({
//  artist: "Miles Davis",
//  publishYear: 1959
//});

//const Animal = Backbone.Model.extend({
//  walk: function (){
//    Animal.prototype.walk.apply(this); //Esto es para usar el metodo the la clase padre
//
//    console.log("Animal is walking");
//  }
//})
//
//const Dog = Animal.extend();
//
//const dog = new Dog();
//
//dog.walk();
//
const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
  model: Song,
});

const songs = new Songs([
  new Song({ title: "Song 1" }),
  new Song({ title: "Song 2" }),
  new Song({ title: "Song 3" }),
]);

songs.add(new Song({ title: "Song 4" }));

// songs.at(0) access to the first element of the collection array object 
// songs.get("c1") cid: c1 backbone assign a temporal id to each element og the collection
// songs.remove(songs.at(0));
// songs.add(new Song({title: "Song 5", genre: "Jazz", downloads: 110}), { at: 0 });

// songs.push(new Song({title: "Song", genre: "Jazz", downloads: 90})); this is like a classci way to push objects into array

// Searching methods
// const jazzSong = songs.where({ genre: "Jazz:}); this returns a collection of elements that match this pattern

// const firstJazzSong = songs.findWhere({ genre: "Jazz"}); returns the first element that it is found.

// const filteredSong = songs.where({genre: "Jazz", title: "Song 2"})

// const filteredSong = songs.filter(function(){
//  return song.get("downloads") > 100;
//});

// songs.each(function(song) {
//  console.log(song);
//});

//const Songs = Backbone.Collection.extend({
//  model: Song
//  url: "/api/songs"
//});
//
//const songs = new Songs();
//songs.fetch();


// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
