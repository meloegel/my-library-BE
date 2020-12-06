
exports.seed = function (knex, Promise) {
  return knex('books').insert([
    {
      id: 1, title: 'Helter Skelter', author: 'Vincent Bugliosi',
      pageCount: 687, yearPublished: 1974, coverArt: 'https://images-na.ssl-images-amazon.com/images/I/41IqzFrvjaL._SX331_BO1,204,203,200_.jpg',
      description: 'True Story of the Manson Murders', userId: 1
    },
    {
      id: 2, title: 'The Illustrated Man', author: 'Ray Bradbury',
      pageCount: 281, yearPublished: 1948, coverArt: 'https://miro.medium.com/max/279/1*1RVtl-4ElhQMdJXtJGo0Fw.jpeg', description: 'Collection of interplanetary short stories', userId: 1
    },
    {
      id: 3, title: 'Twenty Thousand Leagues Under The Sea', author: 'Jules Verne',
      pageCount: 303, yearPublished: 1870, coverArt: 'https://i.pinimg.com/originals/72/ee/7e/72ee7eceed2f44dc17f9823e152fc5b5.jpg', description: 'Follow Professor Aronnax on an adventure with Captain Nemo', userId: 1
    }
  ]);
};