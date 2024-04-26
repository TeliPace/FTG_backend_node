# FTG_backend_node

## Endpoints

`GET`
`/inventory`
Description: Gets all items in inventory, returning an array of objects.
QueryParams: ?sku={insert sku number here}
Example response:

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

`/inventory/{id}`
Description: Gets specific item by MONGODB ID
