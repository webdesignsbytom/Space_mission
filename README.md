# Space Mission

Current Address [Live Link](https://main--velvety-blini-fa7e84.netlify.app/)

## Table of contents

- [Space Mission](#space-mission)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Server](#server)
  - [Portal Frontend](#portal-frontend)
    - [Run this project locally](#run-this-project-locally)
  - [Testing](#testing)
  - [Projects](#projects)
    - [Circuitry](#circuitry)
    - [Applications](#applications)
  - [Things to consider](#things-to-consider)

## General info

Project Goal: Send a rocket with a 200g payload to the moon.

Stages:

1. Build a rocket
2. Build a rocket with recoverable parts for relaunch
3. Build a 2 stage rocket
4. Build a 2 stage rocket with sensors and radio
5. Build an orbiter payload with a radio responder
6. Build a rocket with orbital payload.
7. Build a luna rocket.
8. Build a luna rocket with sensors and payload.
9. Build a rocket with example luna rocket payload for launch test.

## Technologies

App developed with:

Frontend Portal: React, JavaScript, Tailwind, Axios, validator

Backend Server: Express, Prisma, JavaScript, postgreSQL

Rocket Firmware: C/C++

Rocket Guidance: ??

## Server

A server to manage the portal data and users.
As well as any other sites or servers we require.

## Portal Frontend

Purpose:
Share data and designs between users.

### Run this project locally

1. Fork this repository and clone the fork to your machine.
2. Navigate to client and server files and run
3. `npm install`
4. `npm start`

## Testing

API tests run through Insomnia testing suit.
Check server dir for test files.

## Projects

1. Rocket Design
2. Custom Display Apps
3. Circuit programming

### Circuitry

1. Gyroscope and Speed monitor - chip for arduino
2. Raspberry Pi Brain
3. Ignition controller
4. Radio Signal transmitter - ping a location and id signal - send data to ground control
5. Temperature sensor/s
6. Cameras and 360 view

### Applications

A number of windows applications we can run on laptops to monitor the rockets from launch.
Each will be a separate program to increase speed and less page navigation required.

1. Rocket monitoring - speed, height,
2. Rocket controls - overrides, deploy parachute, eject stage
3. Weather App - air flow at heights, temp
4. Air Traffic Monitoring - keep our airspace clear and for issues.
5. Camera feeds - multiple displays and recording for all cameras

## Things to consider

- Total weight of craft - keep a tally on the site
- Redundant control systems
- Weight of payload
- Launch location - close to equator = faster at launch