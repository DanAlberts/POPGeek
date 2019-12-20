# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
forum = Board.create(title: "Forum")
general = Category.create(title: "General", board_id: 1, description: "anything relating to the forum, or relaxed chat you can find here!")
newU = Category.create(title: "New User Landing Page", board_id: 1, description: "Welcome Newcomers! Introduce yourself, learn the ropes of our community, and ask questions!")
comics = Category.create(title: "Comics", board_id: 1, description: "Discuss anything relating to comics, non-manga.")
vidya = Category.create(title: "Video Games", board_id: 1, description: "Discuss anything relating to consoles, or VGing in general.")
scifi = Category.create(title: "Sci-Fi", board_id: 1, description: "Star Trek, Star Wars, Stargate, etc!")
fantasy = Category.create(title: "Fantasy", board_id: 1, description: "Tolkein and his ilk may be found here!")
anime = Category.create(title: "Anime & Manga", board_id: 1, description: "Come yee weeaboos and wannabe otakus!")

rules1 = Topic.create(title: "Forum Rules", category_id: 1)
rules2 = Topic.create(title: "Forum Rules", category_id: 2)
rules3 = Topic.create(title: "Forum Rules", category_id: 3)
rules4 = Topic.create(title: "Forum Rules", category_id: 4)
rules5 = Topic.create(title: "Forum Rules", category_id: 5)
rules6 = Topic.create(title: "Forum Rules", category_id: 6)
rules7 = Topic.create(title: "Forum Rules", category_id: 7)