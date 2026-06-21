import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Register() {

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
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@google.com" required />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="/register" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                    비밀번호를 잊어버리셨습니까?
                                </a>
                            </div>
                            <Input id="password" type="password" placeholder="********" required />
                        </div>
                    </div>
                </form>
            </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        로그인
                    </Button>
                    <Button variant="outline" className="w-full">
                        회원가입
                    </Button>
                </CardFooter>

        </Card>
    )
}