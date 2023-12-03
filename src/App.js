import './App.css';
import BookList from './components/BookList';

function App() {
  const booksData = [
    { id: 1, title: 'Six of Crows', author: 'Leigh Bardugo', description: 'A fantasy novel about a dangerous heist in the Grishaverse.', genre: 'Fantasy' },
    { id: 2, title: 'The Silent Patient', author: 'Alex Michaelides', description: "A psychological thriller about a woman's act of violence and her silence.", genre: 'Thriller' },
    { id: 3, title: 'The Kite Runner', author: 'Khaled Hosseini', description: 'A novel exploring friendship, betrayal, and redemption in Afghanistan.', genre: 'Historical Fiction' },
    { id: 4, title: 'We Were Liars', author: 'E. Lockhart', description: 'A suspenseful and thought-provoking novel about a privileged family and their secrets.', genre: 'Mystery' },
    { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A classic novel addressing racial injustice in the American South during the 1930s.', genre: 'Classic' },
    { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A tale of wealth, love, and tragedy during the Roaring Twenties in the United States.', genre: 'Classic' },
    { id: 7, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', description: 'The first book in the Harry Potter series, following the young wizard\'s journey at Hogwarts School of Witchcraft and Wizardry.', genre: 'Fantasy' },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel about the hobbit Bilbo Baggins and his epic quest to reclaim treasure guarded by the dragon Smaug.', genre: 'Fantasy' },
    { id: 9, title: '1984', author: 'George Orwell', description: 'A dystopian novel exploring the consequences of a totalitarian society and the impact of government surveillance.', genre: 'Dystopian' },
    { id: 10, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A classic novel of manners and romantic entanglements in early 19th-century England.', genre: 'Classic' },
    { id: 11, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A coming-of-age novel narrated by a teenage boy, Holden Caulfield, as he navigates the challenges of adolescence in New York City.', genre: 'Classic' },
    // Add more books as needed
  ];
  
  return(
    <>
    <BookList booksData = {booksData}/>
    </>
  )
}

export default App;
