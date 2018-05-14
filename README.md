## CRUD nodejs server

```sh
npm i && npm start
```

### CREAT & UPDATE : 
```
PUT /data/data3.json HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: ed735e97-1105-4c47-8a0f-c38c79398607

{"test-data":{"data":"data-value"}}
```
### DELETE :
```
DELETE /data/data3.json HTTP/1.1
Host: localhost:3000
```
### READ :
```
GET /data/data1.json HTTP/1.1
Host: localhost:3000
```