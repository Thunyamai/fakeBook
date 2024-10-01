# CC18 fakebook API

---

## env guide

PORT=10222

DATABASE="mysql://u:pw@localhost"3306/fakeBook"

JWT_SECRET

CLOUNDINARY_NAME
CLOUNDINARY_API_KEY
CLOUNDINARY_API_SECRET

---

## Service
|method |path |authen | params | query | body |
|:----- |:--- |:----:  |:------ |:----- |:---- |
|post|/auth/register|-|-|-|{ identity,firstName, lastName, password, confirmPassword }
|post|/auth/login|-|-|-|{ identity, password }
|get|/auth/me|y|-|-|-|
|get|/post|y|-|-|-|
|post|/post|y|-|-|{message, image(file)}
|put|/post|y|:id|-|{message, image(file)}
|delete|/post|y|:id|-|-
|post|/comment|y|-|-|{message, postId} 
|post|/like|y|-|-|{postId}
|delete|/like|y|:id|-|-

---
## Note