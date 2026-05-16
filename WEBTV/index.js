const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const { connect } = require('http2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Parikshit@9310',
    database: 'netflix'
});

app.use(express.urlencoded({extended: true}));

app.set('viewengine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'/public')));

app.listen(port,()=>{
    console.log(`server is now live at port ${port}`);
});

app.get('/webtv',(request,response)=>{
    response.render('home.ejs');
});

app.post('/webtv/login',(request,response)=>{
    setTimeout(()=>{
        let a=0;
        let {email,password} = request.body;

        connection.query('select count(email) from user_details',(err1,result)=>{
            connection.query(`select email from user_details`,(err,result1)=>{
                for(let i=0; i < result[0]['count(email)']; i++) {
                    if(result1[i]['email'] == email) {
                        connection.query(`select * from user_details where email="${result1[i]['email']}"`,(err,result2)=>{
                            if(password == result2[0]['password']) {
                                // console.log(true);
                                response.render('user.ejs',{result2});
                            } else {
                                // response.send('Wrong Password');
                                setTimeout(()=>{
                                    response.redirect('/webtv/sign-in');
                                },3000);
                            }
                        });
                        a=a+1;
                        break;
                    }
                }
                if(a == 0) {
                    response.render('newUser.ejs',{email});
                }
            });
        });
    },3000);
});

app.post('/webtv/newuser',(request,response)=>{
    let {email} = request.body;
    let count = 0;
    connection.query('select email from user_details',(err,result)=>{
        for(let i=0; i<result.length; i++) {
            if(email == result[i]['email']) {
                count++;
                break;
            }
        }
        if(count == 1) {
            setTimeout(() => {
                response.render('signIn.ejs');
            }, 3000);
        } else {
            setTimeout(() => {
                response.render('newUser.ejs',{email});
            }, 3000);
        }
    });
})

app.post('/webtv/sign-up',(request,response)=>{
    let newUser = request.body;
    console.log(newUser);
    let query = `insert into user_details values("${faker.string.uuid()}","${newUser.newUsername}","${newUser.newEmail}","${newUser.newPassword}")`;
    connection.query(query,(err,result)=>{
        console.log(err);
        console.log(result);
    });
    setTimeout(()=>{
        response.render('signIn.ejs');
    },5000);
});

app.get('/webtv/sign-in',(request,response)=>{
    setTimeout(()=>{
        response.render('signIn.ejs');
    },3000);
});