# API USERS

## Overview
It's a CRUD  API managing all users

### [POST] Create user
Allows the creation of a single user

|                              |                         |
|------------------------------|-------------------------|
| Requires authentication?     | NO                      |
| Who can use it?              | Owner and users         |
| Response formats             | application/json        |


* HTTP request: POST -> user/create


#### Parameters :
```javascript
{
    'first_name': 'Timothée', //optional,
    'last_name': 'GUERREAU', // optional
    'email': 'elchapito@gmail.com', // required
    'password': '123456789', //required
    'age': 20, //optional
    'gender': 'm', //optional
    'height': 2.83, //optional
    'weight': 145,
    'city': 'godCity', //optional
    'city_code': '77710', //optional
    'street_number': 7, //optional
    'street_type': 'rue', //optional
    'street_name': 'du paradis', //optional
    'phone': '07 77 77 77 10', //optional
    'image_profil': 'https://randomuser.me/api/portraits/men/86.jpg' //optional
}

```


#### Response: 

```javascript
{
    'first_name': 'Timothée', //optional,
    'last_name': 'GUERREAU', // optional
    'email': 'elchapito@gmail.com', // required
    'password': '123456789', //required
    'age': 20, //optional
    'gender': 'm', //optional
    'height': 2.83, //optional
    'weight': 145,
    'city': 'godCity', //optional
    'city_code': '77710', //optional
    'street_number': 7, //optional
    'street_type': 'rue', //optional
    'street_name': 'du paradis', //optional
    'phone': '07 77 77 77 10', //optional
    'image_profil': 'https://randomuser.me/api/portraits/men/86.jpg' //optional
}

```

###[GET] Show user
Get an user by id.

|                              |                         |
|------------------------------|-------------------------|
| Requires authentication?     | NO                      |
| Who can use it?              | Owner and users         |
| Response formats             | application/json        |

#### Parameters :
```javascript
```
