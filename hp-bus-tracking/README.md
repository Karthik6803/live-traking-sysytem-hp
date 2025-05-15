# HP Bus Tracking System

This project is a live tracking system for public buses in Himachal Pradesh. It provides real-time information about bus stands, arrival times, and other relevant details based on travel data.

## Features

- Real-time tracking of buses
- Display of bus stand names and locations
- Arrival times for each bus
- API endpoints for fetching bus and stand information

## Project Structure

```
hp-bus-tracking
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers
│   │   ├── busController.ts    # Handles bus-related requests
│   │   └── standController.ts   # Handles bus stand-related requests
│   ├── models
│   │   ├── bus.ts              # Defines the Bus model
│   │   └── stand.ts            # Defines the Stand model
│   ├── routes
│   │   ├── busRoutes.ts        # Defines bus-related API routes
│   │   └── standRoutes.ts      # Defines stand-related API routes
│   ├── services
│   │   └── trackingService.ts   # Fetches and processes travel data
│   └── types
│       └── index.ts            # Type definitions for Bus and Stand
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hp-bus-tracking
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

## API Endpoints

- **Bus Endpoints**
  - `GET /api/buses`: Retrieve a list of all buses.
  - `GET /api/buses/:id`: Retrieve details for a specific bus.

- **Stand Endpoints**
  - `GET /api/stands`: Retrieve a list of all bus stands.
  - `GET /api/stands/:id`: Retrieve details for a specific bus stand.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.