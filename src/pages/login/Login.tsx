import {Button} from "@/components/ui/button"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {loginResolver, type ValidationResult} from "@/services/login/loginResolver.ts";
import * as React from "react";
import {useState} from "react";
import {globalStore} from "@/components/global/globalStore.ts";
import {useShallow} from "zustand/react/shallow";

export default function Register() {
    const [isMsgShow, setMsgShow] = useState(false);
    const [message, setMessage] = useState('');

    //TODO -> 로딩 관련 전역 관리 Zustand 사용하기
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(()=>{
    //
    //     //unmount clean-up
    //     return ()=>{}
    // },[message])

    const {bears, food, isShow, increase, feed, setShow } = globalStore(useShallow(state => (
            {
                bears : state.bears,
                food : state.food,
                isShow : state.isShow,
                increase : state.increase,
                feed : state.feed,
                setShow : state.setShow
            }
        )
    ))

    if (isShow) {
        console.log(food);
        console.log(bears);
        feed('된장찌개');
        increase(1);
        console.log(food);
        console.log(bears);
        console.log(isShow);
    }
    // useEffect(()=>{

    // },[isShow])
    //
    const typingDetector= () => {
        if(isShow){
            setMsgShow(false);
        }
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 로딩바 상태값
        setShow(true);
        const formData = new FormData(event.currentTarget);
        const validationResult: ValidationResult = loginResolver({
            email: formData.get('email') as string || '',
            password: formData.get('password') as string || ''
        });

        setTimeout(()=>{},3000);

        if (!validationResult.type) {
            setMessage(validationResult.message);
            setMsgShow(!validationResult.type);
            setShow(false);
        }
    }
    return (
        <Card className="w-full max-w-lg">
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>계정 로그인</CardTitle>
                    <CardDescription>이메일과 패스워드를 입력해주세요.</CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" type="text" placeholder="email@google.com" onInput={typingDetector}/>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="/register"
                                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    비밀번호를 잊어버리셨습니까?
                                </a>
                            </div>
                            <Input name="password" type="password" placeholder="********" onInput={typingDetector}/>
                        </div>
                    </div>
                </CardContent>
                <div style={{display: isMsgShow ? 'block' : 'none'}}>{message}</div>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        로그인
                    </Button>
                    <Button variant="outline" className="w-full">
                        회원가입
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}