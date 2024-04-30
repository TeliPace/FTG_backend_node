# FTG Backend

[Live Link](https://ftg-backend-node.onrender.com)

## Overview

**Tools:** Built using Node.js, Express.js and MongoDB\
**Description:** This mini backend is made to mock the Huboo API endpoints for use in the [Pace Integration ltd](https://www.paceintegration.com/) Fast Track Graduate Business Case.

## Endpoints for Phase 1

`/inventory`\
`GET`\
**Description:** Gets all items in inventory, returning an array of objects.\
**QueryParams:** ?sku={insert sku number here}\
**Example response:**

`200`

```json
[
  {
    "_id": "662b6b892740b4730ccfbf05",
    "sku": 119119126,
    "client_sku": "64654",
    "total_quantity": 200,
    "total_allocated_quantity": 0,
    "__v": 0
  },
  {
    "_id": "662b6be52740b4730ccfbf07",
    "sku": 119119128,
    "client_sku": "64625720",
    "total_quantity": 100,
    "total_allocated_quantity": 0,
    "__v": 0
  },
  {
    "_id": "662b7f4e56caa5ab73b24f40",
    "sku": 119119127,
    "client_sku": "6424654",
    "total_quantity": 0,
    "total_allocated_quantity": 3,
    "__v": 0
  }
]
```

---

`/order`\
`POST`\
**Description:** creates a new order in the database and returns the successfully created order.\
**Example Request:**

This is an example of the format your post request needs to follow to be accepted by the API. Required fields are commented.

```json
{
  "client_order_id": "YOUR_ORDER_ID_1345",
  //required --->
  "lines": [
    {
      "sku": 123,
      "quantity": 2,
      "sales_value": {
        "amount": 22.99,
        "currency": "GBP"
      },
      //<----
      "batch_requirements": {
        "min_expiry_date": "2024-01-31Z"
      }
    }
  ],
  //required---->
  "address": {
    "name": "George Smith",
    "line_one": "1 Mushroom Lane",
    "line_two": "Middletown",
    "line_three": "Uppercounty",
    "line_four": "Lowerregion",
    "town": "Bristol",
    "country_code": "GB",
    "postcode": "AB1 2CD",
    "email_address": "example@domain.com",
    "phone_number": "+44 7123456789"
  },
  //<-----
  "shipping_service": null,
  "note": "This is my very special order note.",
  "channel": null,
  "order_options": null,
  "customer_type": "B2C"
}
```

**Example Response:**\
`201` - Successfully created

```json
{
  "client_order_id": "YOUR_ORDER_ID_1345",
  "lines": [
    {
      "sku": 123,
      "quantity": 2,
      "sales_value": {
        "amount": 22.99,
        "currency": "GBP"
      }
    }
  ],
  "address": {
    "name": "George Smith",
    "line_one": "1 Mushroom Lane",
    "line_two": "Middletown",
    "line_three": "Uppercounty",
    "line_four": "Lowerregion",
    "town": "Bristol",
    "country_code": "GB",
    "postcode": "AB1 2CD",
    "email_address": "example@domain.com",
    "phone_number": "+44 7123456789"
  },
  "shipping_service": null,
  "note": "This is my very special order note.",
  "channel": null,
  "order_options": null,
  "customer_type": "B2C",
  "_id": "6630b80ac366c56ad86ee085",
  "createdAt": "2024-04-30T09:21:14.864Z",
  "updatedAt": "2024-04-30T09:21:14.864Z",
  "__v": 0
}
```
