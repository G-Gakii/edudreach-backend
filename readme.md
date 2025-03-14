# EduREACH BACKEND

## Api endpoints

### Auth

- Base url `localhost:3000/api/edureach`
1. `POST \register` : Register user
- Request body
    - role can only be `"student", "admin", "volunteer", "donor"`
```
{
    "username":"fep",
    "email":"fepobeh665@oziere.com",
    "role":"student",
    "password":"Fep@12345",
    "password2":"Fep@12345"
}
```

- Response
  ```
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDA5MmVkYjExZTVhM2NjY2U2NTg2NiIsImlhdCI6MTc0MTk0NTkyMiwiZXhwIjoxNzQxOTQ5NTIyfQ.vl_6I7HZjBvcIVQML11tbl_VJL0q8d1rC3jHPmtBtfw",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDA5MmVkYjExZTVhM2NjY2U2NTg2NiIsImlhdCI6MTc0MTk0NTkyMiwiZXhwIjoxNzQxOTQ5NTIyfQ.vl_6I7HZjBvcIVQML11tbl_VJL0q8d1rC3jHPmtBtfw",
    "role": "student"
}
  ```
  
   
1.  `POST  \login  `: login user

- Request body
```
{
   "username":"foo",
    "password":"Foo@123456"
}
```
- Response
  ```
  {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDA5MmVkYjExZTVhM2NjY2U2NTg2NiIsImlhdCI6MTc0MTk0NTkyMiwiZXhwIjoxNzQxOTQ5NTIyfQ.vl_6I7HZjBvcIVQML11tbl_VJL0q8d1rC3jHPmtBtfw",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDA5MmVkYjExZTVhM2NjY2U2NTg2NiIsImlhdCI6MTc0MTk0NTkyMiwiZXhwIjoxNzQxOTQ5NTIyfQ.vl_6I7HZjBvcIVQML11tbl_VJL0q8d1rC3jHPmtBtfw",
    "role": "student"
}
  ```