# Project Overview

## Project Name

Your Craft

## Project Description

This web-app will utilize React, Node.js, Express, Mongoose and MongoDB to display an inventory of craft beer, wines and liquors. It will also allow small businesses to add their products, a link to their website, as well as show details about the beverage.

## Wireframes

Beverage details/All beverages

<img width="490" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640188781/Project%203%20/Screen_Shot_2021-12-22_at_10.59.37_AM_oz1pal.png">

<img width="494" alt="Screen Shot 2021-12-22 at 10 38 43 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189080/Project%203%20/Screen_Shot_2021-12-22_at_11.04.38_AM_tf6kmg.png">
<img width="494" alt="Screen Shot 2021-12-22 at 10 38 43 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189119/Project%203%20/Screen_Shot_2021-12-22_at_11.05.15_AM_jgq17k.png">
<img width="494" alt="Screen Shot 2021-12-22 at 10 38 43 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189478/Project%203%20/Screen_Shot_2021-12-22_at_11.11.12_AM_zbjfxf.png">

Creating and Editing Beverages

<img width="491" alt="Screen Shot 2021-12-22 at 10 36 27 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189231/Project%203%20/Screen_Shot_2021-12-22_at_11.07.08_AM_jmatl0.png">
<img width="491" alt="Screen Shot 2021-12-22 at 10 36 27 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189205/Project%203%20/Screen_Shot_2021-12-22_at_11.06.42_AM_rs3um2.png">

Sign in/Sign up

<img width="491" alt="Screen Shot 2021-12-22 at 10 38 08 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189045/Project%203%20/Screen_Shot_2021-12-22_at_11.04.02_AM_paptow.png">

### LINK TO FIGMA

https://www.figma.com/file/rWEO7xnxM16KNsIp9iTdzw/Jigify-your-Craft?node-id=0%3A1

## COMPONENT HIRARCHY

<img width="1045" alt="Screen Shot 2021-12-22 at 10 48 16 AM" src="https://user-images.githubusercontent.com/92862291/147119905-fcfe3804-aa2a-4c4b-9b04-b6ac7f32a164.png">

<img width="786" alt="Screen Shot 2021-12-22 at 10 54 47 AM" src="https://user-images.githubusercontent.com/92862291/147119927-b0724f5a-2367-447d-a51e-4fcbf9528cdb.png">

https://whimsical.com/yourcraft-GVhPEEF314RcfjdXyEmte9https://whimsical.com/yourcraft-GVhPEEF314RcfjdXyEmte9

## TEAM EXPECTATIONS

https://docs.google.com/document/d/11HYAZT8zjCtWXJuzrMicIFx_-fSo9VtNpZ3cj4bz-Lg/edit

<img width="491" alt="Screen Shot 2021-12-22 at 10 38 08 AM" src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1640189733/Project%203%20/Screen_Shot_2021-12-22_at_11.15.29_AM_q75mgz.png">

## OVERVIEW

This web-app will allow users (small businesses) to promote and advertise their craft beverages and wines. This app will show all of the details including aroma, taste, ABV, and a link to their website. It will also allow the user to display and show a bit of the personality/background of their business and product.

## MVP/POST MVP

https://github.com/kimcapgab/your-craft/projects/1

## Schema

````
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
    aroma: { type: String, required: true },
    description: { type: String, required: true },
    abv: { type: String, required: true },
    taste: { type: String, required: true },
    website: { type: String, required: true },
    imgURL: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
}```



````
