# Project Template: React/Rails API

# Phase-4-Final-Project

## Sunil's BlogSpot

### Overview

Sunil's BlogSpot will be a site where users can log in a read various blogs written by other users. A user can also create their own blog , as well as comment on other blogs.

### Features

The page will load the homepage with a navbar at the top.
If a user is not currently logged in, a sign in/sign up page will be displayed. Once logged in, the user will be taken to their home page where all of their blogs will be visible to them. From here they can edit any blogs they've written, or delete a blog entirely, if they wish. This is also the page that allows them to log out.
Users can then navigate to a list of all blogs. From the Blogs nav, a user can click on a blog to read the content, as well as read all comments left on the blog. Users can also leave their own comment under the blog, as well as like/dislike comments.
Navigating to "Create Post" will allow users to create their own blog. They will write a title for their blog, select a topic for their blog from a dropdown menu, and then write their blog in the content box. Once submitted, users will immediately see their blog when navigating back to all blogs.

### Project Requirements

1. Use a Rails API backend with a React frontend.
2. Have at least three models on the backend, that include:
   at least one one-to-many relationship
   at least one many-to-many relationship
3. full CRUD actions for at least one resource
4. Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
5. Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.
