import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {loginResolver} from "@/services/auth/loginResolver.ts";
import * as React from "react";
import {useState} from "react";
import {publicApiClient} from "@/services/api/publicApiClient.ts";
import userTokenHandler from "@/services/api/userTokenHandler.ts";
import {useNavigate} from "react-router-dom";
import type {ValidationResult} from "@/types/common/baseEntity.ts";

export default function Register() {
    const [isMsgShow, setMsgShow] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const typingDetector= () => {
        if(isMsgShow){
            setMsgShow(false);
        }
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 로딩바 상태값
        const formData = new FormData(event.currentTarget);
        const validationResult: ValidationResult = loginResolver({
            email: formData.get('email') as string || '',
            password: formData.get('password') as string || ''
        });

        if (!validationResult.type) {
            setMessage(validationResult.message);
            setMsgShow(!validationResult.type);
            return;
        }

        const queryString = {
            email : formData.get('email'),
            password : formData.get('password')
        }

        publicApiClient.get({reqUrl : '/membersInfo',queryString : queryString})
            .then((data)=>{
                const userInfo = data;
                console.log(data);
                if(! userInfo || userInfo.length === 0){
                    setMessage('아이디 또는 비밀번호가 맞지 않습니다.');
                    setMsgShow(true);
                    return;
                }

                if(!userTokenHandler.hasToken()){
                    userTokenHandler.setToken(data[0].id);
                }

                navigate('/main');
            }).catch((error) =>{
                alert(error);
            })
    }
    return (
        <Card className="w-full max-w-lg login-form-container">
            <form onSubmit={handleSubmit}>
                <CardHeader className='mb-2 gap-1'>
                    <CardTitle>계정 로그인</CardTitle>
                    <CardDescription>이메일과 패스워드를 입력해주세요.</CardDescription>
                    {/*<CardAction>*/}
                    {/*    <Button variant="link">Sign Up</Button>*/}
                    {/*</CardAction>*/}
                </CardHeader>
                <CardContent className='mb-3'>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" type="text" placeholder="email@google.com" onInput={typingDetector}/>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="/src/pages/login/SignUp"
                                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    비밀번호를 잊어버리셨습니까?
                                </a>
                            </div>
                            <Input name="password" type="password" placeholder="********" onInput={typingDetector}/>
                        </div>
                    </div>
                </CardContent>
                <div className='ml-5 mb-2 text-red-600' style={{visibility: isMsgShow ? 'visible' : 'hidden'}}>{message}</div>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        로그인
                    </Button>
                    <Button type="button" variant="outline" className="w-full" onClick={()=>navigate('/register')}>
                        회원가입
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}