User.destroy_all
Blog.destroy_all
Comment.destroy_all


puts "🌱 Seeding spices..."

puts "Creating users..."
user_1 = User.create(username: "SNilavarath", password: "123", avatar: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI=" )
user_2 = User.create(username: "MNilavarath", password: "test", avatar: "https://civiliansinconflict.org/wp-content/uploads/2017/09/female-silhouette.jpg" )
user_3 = User.create(username: "Rpisciot", password: "test123", avatar: "https://civiliansinconflict.org/wp-content/uploads/2017/09/female-silhouette.jpg" )
user_4 = User.create(username: "AKandy", password: "123test", avatar: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI=" )

puts "Creating blogs..."
blog_1 = user_1.blogs.create(title: "first blog", topic: "lifestyle", content: "This is my first blog!", views: 0)
blog_2 = user_2.blogs.create(title: "second blog", topic: "entertainment", content: "This is my movie review!", views: 0, user_id: 2 )
blog_3 = user_3.blogs.create(title: "third blog", topic: "tech", content: "This is my coding tutorial", views: 0, user_id: 3 )
blog_4 = user_4.blogs.create(title: "fourth blog", topic: "finance", content: "This is my stock predictions", views: 0, user_id: 4 )

puts "Creating comments..."
comment_1 = Comment.create(user_id: 2, content: "I like this blog" , likes: 0, dislikes: 0, blog_id: 1, )
comment_2 = Comment.create(user_id: 3, content: "I like this blog, too" , likes: 0, dislikes: 0, blog_id: 1, )
comment_3 = Comment.create(user_id: 2, content: "awesome" , likes: 0, dislikes: 0, blog_id: 1, )


puts "✅ Done seeding!"
