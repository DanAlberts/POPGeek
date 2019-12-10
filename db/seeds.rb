# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
forum = Board.create(title: "Forum")
general = Category.create(title: "General", board_id: 1)
newU = Category.create(title: "New User Landing Page", board_id: 1)
comics = Category.create(title: "Comics", board_id: 1)
vidya = Category.create(title: "Video Games", board_id: 1)
scifi = Category.create(title: "Sci-Fi", board_id: 1)
fantasy = Category.create(title: "Fantasy", board_id: 1)
anime = Category.create(title: "Anime & Manga", board_id: 1)