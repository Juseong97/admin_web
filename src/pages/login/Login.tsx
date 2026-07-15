import {Button} from "@/components/ui/button"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {loginResolver, type ValidationResult} from "@/services/login/loginResolver.ts";
import {useState} from "react";


export default function Register() {
    const [isShow , setIsShow] = useState(true);
    const [message, setMessage] = useState('');
    //TODO -> 로딩 관련 전역 관리 Zustand 사용하기
    // const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (event) => {
        
        const validationResult : ValidationResult = loginResolver({email : event.target , password : event.target });
        if(!validationResult.type) {
            setMessage(validationResult.message);
            setIsShow(validationResult.type);
        }


    }
    return (
        <Card className="w-full max-w-lg" >
            <CardHeader>
                <CardTitle>계정 로그인</CardTitle>
                <CardDescription>이메일을과 패스워드를 입력해주세요.</CardDescription>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" type="email" placeholder="email@google.com" required />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="/register" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    비밀번호를 잊어버리셨습니까?
                                </a>
                            </div>
                            <Input name="password" type="password" placeholder="********" required />
                        </div>
                    </div>
                </form>
            </CardContent>
                <div style={{display : isShow ? 'block' : 'none'}}>{message}</div>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" value="Submit">
                        로그인
                    </Button>
                    <Button variant="outline" className="w-full">
                        회원가입
                    </Button>
                </CardFooter>

        </Card>
    )
}