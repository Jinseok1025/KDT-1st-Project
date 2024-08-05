import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { config } from './config.js'
import session from 'express-session';
import loginRouter from './routes/login.js' //로그인
import userRouter from './routes/users.js' //회원정보
import busRouter from './routes/bus.js' //버스
import communityRouter from './routes/community.js' //커뮤니티
// import imgRouter from './routes/image.js' //물가생활
import { connectDB } from "./db/database.js";
// import adRouter from './routes/ad.js' //내가 쓴글


const app = express()
const html = fs.readFileSync('index.html')
app.use(express.json())
app.use(morgan('combined'))
app.use(express.static('public'));
app.use('/public', express.static('public'));

// 세션 설정
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use('/login',loginRouter);

app.use('/users',userRouter);

app.use('/bus',busRouter);

app.use('/community',communityRouter);

// app.use('/image',imgRouter)

// app.use('/ad',adRouter)

app.get('/',(req,res)=>{
  res.writeHead(200)
  res.write(html)
  // res.sendFile(path.join(__dirname, 'public', html));
  res.end()
});

app.get('/index.html',(req,res)=>{
  res.writeHead(200)
  res.write(html)
  res.end()
});

app.get('/member.html', (req, res) => {
  res.writeHead(200)
  // res.sendFile(path.join(__dirname, 'public', 'sub_page', html));
  res.end()
});

connectDB().then((db) => {
  console.log('몽구스를 사용하여 연결성공')
  app.listen(config.host.port);
}).catch(console.error);