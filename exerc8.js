/*
Implemente uma função chamada countBooksInCategory que conte o
número de livros em cada categoria e retorne um objeto com o nome
da categoria como chave e a contagem de livros como valor.
*/

function countBooksInCategory (booksArray) {
  let response = []
  for (i = 0; i < booksArray.length; i++) {
    let element = booksArray[i];
    response[i] = {
      category: element.category,
      quantity: element.books.length,
    }
  }
  return response;
}


const booksByCategory = [
  {
    category: "Romance",
    books: [
      {
      title: "O Sol Também é Uma Estrela",
      author: "Nicola Yoon",
      },
      {
      title: "O Noivo da Minha Melhor Amiga",
      author: "Emily Giffin",
      
      },
      {
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      },
    ],
  },
  {
    category: "Fantasia",
    books: [
      {
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      },
      {
      title: "O Hobbit",
      author: "J.R.R Tolkien",
      },
      {
      title: "Eragon",
      author: "Christopher Paolini",
      },
      {
      title: "O Nome do Vento",
      author: "Patrick Rothfuss",  
      }
    ]
  },
  {
    category: "Suspense",
    books: [
      {
      title: "A Garota no Trem",
      author: "Paula Hawkins",  
      },
      {
      title: "O Silêncio dos Inicentes",
      author: "Thomas Harris",  
      }
    ]
  },
  {
    category: "Ficção Cientifica",
    books: [
      {
      title: "Duna",
      author: "Frank Herbert",
      },
      {
      title: "Neuromancer",
      author: "William Gibson",
      },
      {
      title: "Fundação",
      author: "Isaac Azimov",
      },
      {
      title: "1984",
      author: "George Orwell",
      },
      {
      title: "O Fim da Infância",
      author: "Arthur C. Clarlke",
      }
    ]
  }
]

console.log(countBooksInCategory(booksByCategory));