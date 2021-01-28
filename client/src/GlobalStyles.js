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
                    width: 950px;
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
            border-radius: 50%;
            height: 60px;
            width: 60px;
            /* margin: 10px; */
        }
    }
`