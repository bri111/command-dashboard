# Commander's Dashboard

**Updated Jun 4, 2024**

### Trey Yasunaga & Marissa Halim 
### ICS 496: Capstone (Fall 2023)

## Tech Stack
- **NextJS**: [Next.js](https://nextjs.org/)
- **Tailwind CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **Prisma**: [Prisma](https://www.prisma.io/)
- **Docker**: [Docker](https://www.docker.com/)
- **PostgreSQL**

## Dependencies
- **ChartJS**: [Chart.js](https://www.chartjs.org/)
- **DaisyUI**: [DaisyUI](https://daisyui.com/docs/install/)
- **Heroicons**: [Heroicons](https://www.npmjs.com/package/@heroicons/react)
- **Framer Motion**: [Framer Motion](https://www.framer.com/motion/introduction/##installation)
- **Bing Maps**: [Bing Maps](https://www.microsoft.com/en-us/maps/bing-maps/choose-your-bing-maps-api)

## GitHub Links
- **Main Project**: [Commanders-Dashboard](https://github.com/Commanders-Dashboard/main)
- **Test CD**: [Test CD](https://github.com/iwalanicampbell/testCD)

## Setup Instructions

### Fork and Clone the Repository
1. **Fork the Project from GitHub**

2. **Clone the GitHub Repository in Terminal**
    ```bash
    git clone https://github.com/YOURUSERNAME/YOUR_PROJECT_TITLE.git
    ```

3. **Navigate to the Project Directory**
    ```bash
    cd my-app
    npm install
    ```

### Setup Docker and Back End
1. **Download Docker Desktop**
    - [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. **Create a `.env` File**
    - In your IDE, create a `.env` file inside the main directory (same directory as `docker-compose.yml`) with the following content:
      ```
      DATABASE_URL="postgresql://username:password@localhost:5432/dashboard"
      DATABASE_USER="username"
      DATABASE_PASSWORD="password"
      ```

3. **Start the Database Container**
    - Run the following command in the main directory (commander-dashboard) and ensure Docker Desktop is running:
    ```bash
    docker compose up
    ```

4. **Verify Connection**
    - Go to `localhost:8080` and log in with the credentials provided in your `.env` file.

### Prisma Setup
1. **Run Prisma Migrate**
    ```bash
    npx prisma migrate dev --name init
    ```
    - This will connect Prisma to the database and create a `schema.prisma` file inside the `prisma` directory.

2. **Seed the Database**
    ```bash
    npx prisma db seed
    ```
    - This initializes the database with the data.

3. **Check the GUI**
    - Verify that the data is populated by checking the link to `mytable` in the GUI.

### Run Environment
1. **Start the Development Server**
    ```bash
    cd my-app
    npm run dev
    ```
    - The app should be running on `http://localhost:3000`.

### Close the Environment
1. **Stop Docker Processes**
    - After using Docker, stop the processes to free up resources.

## Additional Information
- To ensure smooth operations, make sure Docker Desktop is running when starting up the database container.
- For any issues or questions, please refer to the documentation of the respective tools or the project's GitHub issues page.

