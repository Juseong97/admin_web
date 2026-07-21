import {Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet,} from "@/components/ui/field"
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeftIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {useRef, useState} from "react";
import type {ValidationResult} from "@/types/common/baseEntity.ts";
import {signUpResolver} from "@/services/auth/signUpResolver.ts";

export default function SignUp() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isShow,setShow] = useState(false);
    const [requiredElementNm, setRequiredElementNm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const typingDetector= () => {
        if(isShow){
            setShow(false);
            setRequiredElementNm('');
        }
    }

    // TODO : 에러 표시된 요소에 포커싱 처리
    const focusingRef = () => {
        alert(inputRef.current?.name);
        inputRef.current?.focus();
    }

    const handleSubmit = (event : React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const validationResult : ValidationResult = signUpResolver({
            email : formData.get('email') as string || '',
            password : formData.get('password') as string || '',
            rePassword : formData.get('rePassword') as string || '',
            name : formData.get('name') as string || '',
            memberId : formData.get('memberId') as string || '',
            addr : formData.get('addr') as string || '',
            phoneNumber : formData.get('phoneNumber') as string || ''
        })


        if(!validationResult.type){
            setMessage(validationResult.message);
            setShow(!validationResult.type);
            setRequiredElementNm(validationResult.target);
            focusingRef();
            return;
        }
    }

    return (
        <Card className="w-full max-w-lg p-5">
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <div className="flex justify-between">
                            <FieldLegend>회원가입</FieldLegend>

                            <Button type="button" variant="outline" size="icon" aria-label="Go Back" onClick={()=>navigate('/login') }>
                                <ArrowLeftIcon/>
                            </Button>
                        </div>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor={"email"}>이메일
                                    <span className="text-destructive">*</span></FieldLabel>
                                <Input name={"email"} type={"text"} placeholder="name@example.com" maxLength={50} aria-invalid={requiredElementNm === 'email'}
                                       onInput={typingDetector} ref={inputRef}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"memberId"}>아이디
                                    <span className="text-destructive">*</span> </FieldLabel>
                                <Input name={"memberId"} type={"text"} placeholder={"아이디를 입력해주세요"} maxLength={50} aria-invalid={requiredElementNm === 'memberId'}
                                       onInput={typingDetector} ref={inputRef}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"name"}>이름
                                    <span className="text-destructive">*</span> </FieldLabel>
                                <Input name={"name"} type={"text"} placeholder={'이름을 입력해주세요'} maxLength={20} aria-invalid={requiredElementNm === 'name'}
                                       onInput={typingDetector} ref={inputRef}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"addr"}>주소</FieldLabel>
                                <Input name={"addr"} type={"text"}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"phoneNumber"}>휴대폰번호</FieldLabel>
                                <Input name={"phoneNumber"} type={"tel"}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"password"}>비밀번호
                                    <span className="text-destructive">*</span></FieldLabel>
                                <FieldDescription>
                                    최소 8자 이상의 비밀번호를 입력해주세요.
                                </FieldDescription>
                                <Input name={"password"} type={"password"} placeholder={"••••••••"} onInput={typingDetector} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"rePassword"}>비밀번호 확인
                                    <span className="text-destructive">*</span></FieldLabel>
                                <FieldDescription>
                                    비밀번호를 재입력 해주세요.
                                </FieldDescription>
                                <Input name={"rePassword"} type={"password"} placeholder={"••••••••"} aria-invalid={requiredElementNm === 'rePassword'}
                                       onInput={typingDetector} ref={inputRef}/>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
                <div className='ml-5 mb-2 text-red-600' style={{visibility: isShow ? 'visible' : 'hidden'}}>{message}</div>
                <Button type="submit" className="w-full mt-2">
                    회원가입
                </Button>
            </form>
        </Card>
    )
}