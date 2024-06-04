
# Next.js User Registration and Login Application


## Instructions:

### 1. Cloning the Repository:
```bash
git clone https://github.com/vighnesh-7/pil-gaming-1
cd pil-gaming-1
```

### 2. Installation:
```bash
npm install
```

### 3. Running the Application:
```bash
npm run dev
```

The application will run on [http://localhost:3000](http://localhost:3000).

### 4. Accessing Prisma Database Dashboard:
To access the Prisma database dashboard, run the following command:
```bash
npx prisma studio
```

This will open the Prisma database dashboard in your default web browser.

## Additional Notes:
* Make sure to configure your environment variables for any sensitive data (e.g., database credentials, Bcryptjs secret).


## API Documentation

The application uses the following APIs for backend functionality:

- **Register User**: `POST /api/user/signup`
  - Request Body: `{ name:string, email:string, username: string, password: string }`
  - Response: `{ success: boolean, message: string }`

- **Login User**: `POST /api/user/signup`
  - Request Body: `{ username: string, password: string }`
  - Response: `{ success: boolean, message: string, token?: string }`

- **Get User**: `GET @actions/user.ts`
  - Response: `{ name: string }`

For detailed API documentation, please refer to the `/api` directory in the repository.


## Technologies Used

- Next.js
- PostgreSQL 
- Node.js
- Prisma ORM
