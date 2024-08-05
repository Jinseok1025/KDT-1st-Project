
// function createJwtToken(id){
//     return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
// }

const admin_user = {
    userid: 'admin0',
    password: 'qwer1234!'
}

//로그인
export async function login(req, res, next) {
    const {userid, password} = req.body;
    if(userid === admin_user.userid && password === admin_user.password) {
        req.session.authenticated = true;
        res.json({ success: true });
      } else {
        res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' });
    };
};

export async function logout(req, res) {
    req.session.destroy(err => {
        if (err) {
          return res.status(500).json({ success: false, message: '로그아웃 중 오류가 발생했습니다.' });
        }
        res.clearCookie('connect.sid'); // 세션 쿠키 제거
        res.json({ success: true });
      });
};