# Project Overview

## Project Name

Your-Craft

## Project Description

This web-app will utilize React, Node.js, and MongoDB to display an inventory of craft beer and wines. It will also allow small businesses to add their products as well as a link to their website, as well as show details about the beverage.

## Wireframes

Beverage details/All beverages

<img width="494" alt="Screen Shot 2021-12-22 at 10 38 43 AM" src="https://user-images.githubusercontent.com/92862291/147117624-87172725-5538-472a-857d-1c8be778d755.png">

Creating and Editing Beverages

<img width="491" alt="Screen Shot 2021-12-22 at 10 36 27 AM" src="https://user-images.githubusercontent.com/92862291/147117597-ffe82ab7-891f-4312-845c-c73ad4a0151a.png">

Sign in/Sign up

<img width="491" alt="Screen Shot 2021-12-22 at 10 38 08 AM" src="https://user-images.githubusercontent.com/92862291/147117616-5a492f41-13da-4927-b0bb-5a928b0f6b95.png">



### LINK TO FIGMA
https://www.figma.com/file/rWEO7xnxM16KNsIp9iTdzw/Jigify-your-Craft?node-id=0%3A1

## COMPONENT HIRARCHY

<img width="1045" alt="Screen Shot 2021-12-22 at 10 48 16 AM" src="https://user-images.githubusercontent.com/92862291/147119905-fcfe3804-aa2a-4c4b-9b04-b6ac7f32a164.png">

<img width="786" alt="Screen Shot 2021-12-22 at 10 54 47 AM" src="https://user-images.githubusercontent.com/92862291/147119927-b0724f5a-2367-447d-a51e-4fcbf9528cdb.png">

https://whimsical.com/yourcraft-GVhPEEF314RcfjdXyEmte9https://whimsical.com/yourcraft-GVhPEEF314RcfjdXyEmte9


## TEAM EXPECTATIONS
https://docs.google.com/document/d/11HYAZT8zjCtWXJuzrMicIFx_-fSo9VtNpZ3cj4bz-Lg/edit


## OVERVIEW



## MVP/POST MVP

(INSERT LINK FROM GITHUB PROJECTS)


## Schema
```
User
{
    username: { type: String, required: true},
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }

}

Beverage
{
  {
    title: { type: String, required: true },
    style: { type: String, required: true },
    armoa: { type: String, required: true },
    description: { type: String, required: true },
    abv: { type: String, required: true },
    taste: { type: String, required: true },
    website: { type: String, required: true },
    imgURL: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
}```



