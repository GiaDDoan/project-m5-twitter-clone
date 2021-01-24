import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-style: sans-serif;
        margin-top: 3px;

        .container{
                    display: flex;
                    flex-direction: column;
                    border: 2px solid rgb(231,233,238);
                    width: 77vw;
                }

        .title {
            height: 7vh;
            color: blue;
            border-bottom: 2px solid rgb(231,233,238);
            padding-left: 1vw;
        }

        //INPUT + AVATAR
        .inputWithAvatar{
            margin-top: 2vh;
            padding-left: 1vw;
            display: flex;
            height: 20vh;
        }
        .userImg{
            border-radius: 40px;
            height: 50px;
            width: 50px;
            /* margin: 10px; */
        }
        .textArea{
            width: 92%;
            height: 100%;
            margin-left: 20px;
            font-size: 2em;
            /* border: none; */
        }
    }
`