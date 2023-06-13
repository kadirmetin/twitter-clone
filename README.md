# Twitter Clone

This project is an educational Twitter clone developed to mimic the core functionalities of Twitter using modern web technologies. The goal of the project is to improve my web application development skills and learn modern web technologies. You can use this project to understand the basic features of Twitter, perform user registration and login, create tweets, view replies, and track likes.

The project is built on the React framework and provides an easily customizable and responsive user interface with Tailwind CSS. Next.js supports performance improvements such as page routing and data preloading. Prisma and MongoDB are used for database operations, while NextAuth manages user authentication and authorization processes.

By running this project, you can experience the development process of a real web application and learn how to build a project from scratch using modern web technologies.

This project is an excellent learning resource for students, software developers, and beginners in the web development learning process. By analyzing the code and implementing the project, you can gain experience.

Note: This project aims to mimic the core functionalities of Twitter rather than creating an exact replica of Twitter. It does not have any connection or integration with the original Twitter.

## Features

- Registration and login
- Users can create tweets (Editing and deleting will be added later)
- Users can reply to and like tweets
- Users can edit their profile pages and change their profile pictures and cover photos
- The homepage displays the user's own tweets and the tweets of the users they follow
- Users can follow other users and view the tweets of the users they follow
- Users can receive real-time notifications

## Technologies Used

- React
- Tailwind CSS
- Next.js
- Prisma
- MongoDB
- NextAuth

## Screenshots

<p float="left" align="center">
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/62f91b76-97f8-4d2d-b595-315c190b6374" width="225" />
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/a95935d6-c4ae-42e8-9efc-02892c0e41c2" width="225" />
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/bfff489a-13b0-4447-b6b1-d63cd1ee9db2" width="225" />
</p>

## Running on Your Computer

1. Clone the project

```bash
  git clone https://github.com/kadirmetin/twitter-clone.git
```

2. Navigate to the project directory

```bash
  cd twitter-clone
```

3. Install the required packages

```bash
  npm install
```

4. Set the environment variables:

```bash
  DATABASE_URL=<MongoDB connection URL>
  NEXTAUTH_JWT_SECRET="NEXT_AUTH_JWT_SECRET"
  NEXTAUTH_SECRET="NEXT_AUTH_SECRET"
```

5. Run the server

```bash
  npm run dev
```

## Acknowledgements

- [@AntonioErdeljac](https://github.com/AntonioErdeljac) thanks for the amazing study video :)

## License

[MIT](LICENSE)
