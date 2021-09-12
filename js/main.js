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

// COLLECTIONS ==============>
//const Song = Backbone.Model.extend();
//
//const Songs = Backbone.Collection.extend({
//  model: Song,
//});
//
//const songs = new Songs([
//  new Song({ title: "Song 1" }),
//  new Song({ title: "Song 2" }),
//  new Song({ title: "Song 3" }),
//]);
//
//songs.add(new Song({ title: "Song 4" }));

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

// COLLECTIONS ==============>
if (window.__backboneAgent) {
  window.__backboneAgent.handleBackbone(Backbone);
}

const Song = Backbone.Model.extend();
const Songs = Backbone.Collection.extend({
  model: Song,
});

const SongView = Backbone.View.extend({
  tagName: "li",
  className: "song",
  attributes: {
    "data-genre": "Jazz",
  },

  events: {
    click: "onClick",
    "click .bookmark": "onClickBookmark",
  },

  onClick: function () {
    console.log("lalalala");
  },
  onClickBookmark: function (e) {
    e.stopPropagation();
    console.log("Bookmark");
  },

  render: function () {
    this.$el.html(
      this.model.get("title") +
        "<button>Listen</button> <button class='bookmark'>Bookmark</button>"
    );
    this.$el.attr("id", this.model.id);

    return this;
  },
});

const SongsView = Backbone.View.extend({
  initialize: function () {
    this.model.on("add", this.onSongAdded, this);
    this.model.on("remove", this.onSongRemove, this);
  },

  onSongAdded: function (song) {
    var songView = new SongView({ model: song });

    this.$el.append(songView.render().$el);
  },

  onSongRemove: function (song) {
    this.$el.find("li#" + song.id).remove(); 
  },
  render: function () {
    var self = this;
    this.model.each(function (song) {
      const songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  },
});

//const song = new Song({ title: "Yiro Songs" });
const songs = new Songs([
  new Song({ id: 1, title: "Song1" }),
  new Song({ id: 2, title: "Song2" }),
  new Song({ id: 3, title: "Song3" }),
  new Song({ id: 4, title: "Song4" }),
  new Song({ id: 5, title: "Song5" }),
]);

const songsView = new SongsView({ el: "#container", model: songs });
songsView.render();

const Cancion = Backbone.Model.extend({
  defaults: {
    listeners: 0,
  },
});

var CancionView = Backbone.View.extend({
  initialize: function () {
    this.model.on("change", this.render, this);
  },

  render: function () {
    this.$el.html(
      this.model.get("title") + " -Listeners: " + this.model.get("listeners")
    );
    return this;
  },
});

var cancion = new Cancion({ title: "Rock rock" });

var cancionView = new CancionView({ el: "#container-cancion", model: cancion });

cancionView.render();

//const songView = new SongView({ el: "#container", model: song });
//songView.render();

//$("#container").html(songView.render().$el);


//===========> EVENTS
const person = {
  name: "Yiro",
  walk: function() {
    this.trigger("walking", {
      speed: 1,
      time: "08:00"
    })
  }
}

_.extend(person, Backbone.Events);
 
//person.once just run the event the first time is called.

person.on("walking", function(e) {
  console.log("Personis walking");
  console.log("Event Args", e);
});

person.walk();

//person.off("walking"); unsuscribe the object to the events
//===========> EVENTS



