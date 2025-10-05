// src/db.js
const cards = [
  {
    id: 1,
    title: "Hello! I'm Naruto!",
    image: "https://i.ebayimg.com/images/g/BhMAAOSweC9i4Zeu/s-l1200.jpg",
    description: "A ninja from the Hidden Leaf Village.",
    rating: 95,
    price: 200,
    speed: 90
  },
  {
    id: 2,
    title: "Hi! I'm Sasuke!",
    image: "https://i.ebayimg.com/images/g/l8wAAOSwHZBlp-N7/s-l1200.jpg",
    description: "Naruto's rival and friend.",
    rating: 92,
    price: 250,
    speed: 95
  },
  {
    id: 3,
    title: "I'm Sakura!",
    image: "https://i.ebayimg.com/images/g/GC0AAOSwJjNi5a4B/s-l1200.jpg",
    description: "A skilled medical ninja of Team 7.",
    rating: 85,
    price: 180,
    speed: 80
  },
  {
    id: 4,
    title: "I'm Kakashi, your sensei!",
    image: "https://i.pinimg.com/474x/9e/59/6f/9e596f00629dac00bda2cfc0bf239f2b.jpg",
    description: "The Copy Ninja and Team 7's mentor.",
    rating: 98,
    price: 300,
    speed: 88
  },
  {
    id: 5,
    title: "I'm Gaara!",
    image: "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/q~cAAOSwuCRkYW1V/$_57.JPG?set_id=880000500F",
    description: "The jinchūriki of Shukaku.",
    rating: 90,
    price: 220,
    speed: 85
  },
   {
    id: 6,
    title: "I'm Itachi Uchiha.",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/28d6e1ff-9457-4813-9546-3ee5f4400785/d9hc0zf-bb7e4299-0519-46d1-b56c-4f2887aec5b9.png",
    description: "Sasuke's older brother, member of Akatsuki.",
    rating: 97,
    price: 280,
    speed: 92
  },
  {
    id: 7,
    title: "I'm Jiraiya, the Toad Sage!",
    image: "https://i.ebayimg.com/images/g/KiwAAOSwvwNk6OI8/s-l1200.png",
    description: "One of the Legendary Sannin, Naruto's teacher.",
    rating: 96,
    price: 270,
    speed: 89
  },
  {
    id: 8,
    title: "I'm Tsunade!",
    image: "https://i.ebayimg.com/00/s/MTYwMFgxMDA5/z/VZUAAOSw1ztmZjPz/$_57.JPG?set_id=880000500F",
    description: "One of the Legendary Sannin, Fifth Hokage.",
    rating: 94,
    price: 260,
    speed: 84
  },
  {
    id: 9,
    title: "I'm Shikamaru.",
    image: "https://i.pinimg.com/736x/09/d1/6a/09d16a86bb49e5767b1bbb1926ee148f.jpg",
    description: "A genius strategist from the Nara clan.",
    rating: 88,
    price: 210,
    speed: 87
  },
  {
    id: 10,
    title: "I'm Rock Lee!",
    image: "https://media.okini.land/148669-medium_default/naruto-tcg-sr-010-rock-lee.jpg",
    description: "A taijutsu specialist with great spirit.",
    rating: 89,
    price: 230,
    speed: 93
  },
  {
    id: 11,
    title: "I'm Hinata.",
    image: "https://i.pinimg.com/474x/c4/04/1c/c4041c99b43269695aa1e240302da7c9.jpg",
    description: "A kind kunoichi from the Hyūga clan.",
    rating: 87,
    price: 190,
    speed: 82
  },
  {
    id: 12,
    title: "I'm Neji.",
    image: "https://i.pinimg.com/564x/b9/bc/d7/b9bcd70502ff3db715726bc301ac1106.jpg",
    description: "A prodigy of the Hyūga clan.",
    rating: 91,
    price: 240,
    speed: 86
  },
  {
    id: 13,
    title: "I'm Madara Uchiha.",
    image: "https://i.pinimg.com/564x/85/25/61/8525611472f9996e204edc911d9de02d.jpg",
    description: "Founder of Konoha, legendary Uchiha.",
    rating: 99,
    price: 350,
    speed: 94
  },
  {
    id: 14,
    title: "I'm Obito.",
    image: "https://i.pinimg.com/736x/ef/33/51/ef3351cf61a04684bc0655a48b421a9b.jpg",
    description: "Once Kakashi’s friend, later became Tobi.",   
    rating: 93,
    price: 255,
    speed: 91
  },
  {
    id: 15,
    title: "I'm Minato Namikaze.",
    image: "https://i.pinimg.com/736x/5a/bb/df/5abbdf24d57d07ac9fede439ce6b070d.jpg",
    description: "The Fourth Hokage, Naruto's father.",
    rating: 98,
    price: 320,
    speed: 97
  },
  {
    id: 16,
    title: "I'm Kushina Uzumaki.",
    image: "https://i.pinimg.com/736x/b1/00/1a/b1001a13a7f24e1f2bddcac632c4753e.jpg",
    description: "Naruto's mother, former jinchūriki of Kurama.",
    rating: 92,
    price: 240,
    speed: 83
  },
  {
    id: 17,
    title: "I'm Pain.",
    image: "https://d1htnxwo4o0jhw.cloudfront.net/spec/7814875/small/gQ94gkwr-0ygV0kMTw5NSA.jpg",
    description: "Leader of Akatsuki, wielder of Rinnegan.",
    rating: 97,
    price: 300,
    speed: 90
  },
  {
    id: 18,
    title: "I'm Konan.",
    image: "https://i.ebayimg.com/images/g/mZIAAOSwQNFjR3Zt/s-l1200.jpg",
    description: "The angel of Akatsuki, master of paper jutsu.",
    rating: 91,
    price: 230,
    speed: 88
  },
  {
    id: 19,
    title: "I'm Kiba Inuzuka!",
    image: "https://i.ebayimg.com/images/g/rq4AAOSwDxNnixrr/s-l1200.jpg",
    description: "Ninja with enhanced senses, fights with Akamaru.",
    rating: 86,
    price: 175,
    speed: 84
  },
  {
    id: 20,
    title: "I'm Choji!",
    image: "https://kronozio.blob.core.windows.net/images/card/e39b30754e38409b9ddd42ec618b8619_front.jpg",
    description: "A loyal friend, member of the Akimichi clan.",
    rating: 84,
    price: 160,
    speed: 80
  }
  
]

export default cards
