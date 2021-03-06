const express = require("express");
var router = express.Router();
var auth = require("../lib/auth");

router.get("/choose", (req, res) => {
    if(!auth.isOwner(req, res)){
        res.redirect('/');
        return false;
    }

  var html = `
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
        <title>Collusic</title>
    
        <!-- 부트스트랩 -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
        <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <style>
            body {
                background-image: url("sky-clouds-summer.jpg");
                background-size: cover;
            }
    
            .row {
                position: relative;
                display: flex;
            }
    
            .row .col-md-4 {
                font-size: 50px;
                font-weight: bold;
                background-color: whitesmoke;
                padding-bottom: 50%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
    
    
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                -webkit-transition: .3s;
                -moz-transition: .3s;
                -ms-transition: .3s;
                -o-transition: .3s;
                transition: .3s;
            }
    
            .row .col-md-4:hover {
                font-size: 50px;
                font-weight: bold;
                background-color: mediumseagreen;
                padding-bottom: 45%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
                color: white;
    
                -webkit-transform: scale(1.05);
                -moz-transform: scale(1.05);
                -ms-transform: scale(1.05);
                -o-transform: scale(1.05);
                transform: scale(1.05);
            }
    
            .left {
                background-color: beige;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .center {
                background-color: aqua;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .right {
                background-color: burlywood;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .left-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .center-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .right-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 3px 3px 5px grey;
            }
    
            img {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation {
                font-size: large;
            }
    
            .left:hover {
                color: white;
            }
    
            .img2 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation2 {
                font-size: large;
            }
    
            .img3 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation3 {
                font-size: large;
            }
    
        </style>
    </head>
    
    <body>
    
        <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
        <script src="js/bootstrap.min.js"></script>
        <div>${auth.statusUI(req, res)}</div>
        <div class="row">
        <a href="/portfolio">
            <div class="col-md-4 left">
                <div class="left-text">
                    Portfolio
                </div>
                <div class="img">
                    <img src="그림1.png">
                </div>
                <div class="imformation">
                    <p>
                        이름 : 박재현
                    </p>
                    <p>
                        전화번호 : 010-4814-2697
                    </p>
                    <p>
                        대표곡 : Music is my Life
                    </p>
                </div>  
            </div>
            </a>
            <a href="/collaborating">
            <div class="col-md-4 center">
                <div class="center-text">
                    Collaborating
                </div>
                <div class="img2">
                    <img src="band.png">
                </div>
                <div class="imformation2">
                    <p>
                        .....
                    </p>
                    
                </div>
            </div>
            </a>
            <a href="/waitingCollaboration">
            <div class="col-md-4 right">
                <div class="right-text">
                    Waiting collaboration
                </div>
                <div class="img3">
                    <img src="united.png">
                </div>
                <div class="imformation3">
                    <p>
                        .....
                    </p>
                </div>
            </div>
            </a>
        </div>
    </body>
    
    </html>
    `;
  res.send(html);
});
module.exports = router;