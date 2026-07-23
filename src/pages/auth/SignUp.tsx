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
import {checkEmailFormat, formToObjectData, isEmpty, telNumberFormatter} from "@/utils/cmmnUtils.ts";
import {publicApiClient} from "@/services/api/publicApiClient.ts";
import {EmailStateBadge} from "@/pages/auth/EmailStateBadge.tsx";
import {toast} from "sonner";

export default function SignUp() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isShow, setShow] = useState(false);
    const [requiredElementNm, setRequiredElementNm] = useState('');
    const [checkEmailCnt, setCheckEmailCnt] = useState(-1);
    const emailRef = useRef<HTMLInputElement>(null);
    // 타이핑 시 메세지 숨김처리
    const typingDetector = () => {
        if (isShow) {
            setShow(false);
            setRequiredElementNm('');
        }
    }

    //회원가입 이벤트
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const validationResult: ValidationResult = signUpResolver({
            email: formData.get('email') as string || '',
            password: formData.get('password') as string || '',
            rePassword: formData.get('rePassword') as string || '',
            name: formData.get('name') as string || '',
            memberId: formData.get('memberId') as string || '',
            addr: formData.get('addr') as string || '',
            phoneNumber: formData.get('phoneNumber') as string || ''
        })

        if (!validationResult.type) {
            // form안의 input 요소들의 name으로 찾아 포커싱
            (event.currentTarget.elements.namedItem(validationResult.target) as HTMLInputElement)?.focus();

            setMessage(validationResult.message);
            setShow(!validationResult.type);
            setRequiredElementNm(validationResult.target);
            return;
        }

        if(checkEmailCnt !== 0) {
            setMessage('이메일 중복체크를 해주시기 바랍니다.');
            setShow(true);
            return;
        }
        const deleteKeySet = new Set<string>();
        deleteKeySet.add('rePassword');

        publicApiClient.post({ reqUrl: '/membersInfo', body: formToObjectData(formData,deleteKeySet) }).then(res => {
            toast.success("OOO님 반갑습니다.\n잠시 후 로그인페이지로 이동합니다.");
            console.log(res)
        });
    }

    // 이메일 중복체크
    const checkEmailDuplicate = () => {
        if(!emailRef.current) {
            return;
        }

        if(isEmpty(emailRef.current.value)) {
            return ;
        }

        if(!checkEmailFormat(emailRef.current.value)) {
            return;
        }

        publicApiClient.get({reqUrl: '/membersInfo', queryString : {'email' : emailRef.current.value }}).then(res => {
            if(res){
                setCheckEmailCnt(res.length);
            }
        })

    }

    return (
        <Card className="w-full max-w-lg p-5">

            {/*<AlertDialog open={dialogOpen}>*/}
            {/*    <AlertDialogContent size={'sm'}>*/}
            {/*        <AlertDialogHeader>*/}
            {/*            <AlertDialogMedia>*/}
            {/*                <PartyPopper />*/}
            {/*            </AlertDialogMedia>*/}
            {/*            <AlertDialogTitle>{'OOO'}님 반갑습니다.</AlertDialogTitle>*/}
            {/*            <AlertDialogDescription>*/}
            {/*                3초 뒤 자동으로 로그인 창으로 넘어갑니다.*/}
            {/*            </AlertDialogDescription>*/}
            {/*        </AlertDialogHeader>*/}
            {/*        <AlertDialogFooter>*/}
            {/*            /!*<AlertDialogCancel onClick={()=> setDialogOpen(false)}>취소</AlertDialogCancel>*!/*/}
            {/*            <AlertDialogAction onClick={()=> navigate('/login')}>로그인</AlertDialogAction>*/}
            {/*        </AlertDialogFooter>*/}
            {/*    </AlertDialogContent>*/}
            {/*</AlertDialog>*/}
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <div className="flex justify-between">
                            <FieldLegend>회원가입</FieldLegend>
                            <Button onClick={()=>
                                toast.success("OOO님 반갑습니다.\n잠시 후 로그인페이지로 이동합니다.",
                                    { position: "top-center" })}>
                                alert Dialog</Button>

                            <Button type="button" variant="outline" size="icon" aria-label="Go Back"
                                    onClick={() => navigate('/login')}>
                                <ArrowLeftIcon/>
                            </Button>
                        </div>
                        <FieldGroup>
                            <Field>
                                <div className="flex justify-between">
                                    <FieldLabel htmlFor={"email"}>이메일<span className="text-destructive">*</span></FieldLabel>
                                    <EmailStateBadge count={checkEmailCnt} />
                                </div>

                                <div className="flex justify-end gap-1">
                                    <Input name={"email"} type={"text"} placeholder="name@example.com" maxLength={50}
                                           aria-invalid={requiredElementNm === 'email'}
                                           onInput={typingDetector} ref={emailRef}/>
                                    <Button type="button" onClick={checkEmailDuplicate}>중복체크</Button>
                                </div>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"memberId"}>아이디
                                    <span className="text-destructive">*</span> </FieldLabel>
                                <Input name={"memberId"} type={"text"} placeholder={"아이디를 입력해주세요"} maxLength={50}
                                       aria-invalid={requiredElementNm === 'memberId'}
                                       onInput={typingDetector}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"name"}>이름
                                    <span className="text-destructive">*</span> </FieldLabel>
                                <Input name={"name"} type={"text"} placeholder={'이름을 입력해주세요'} maxLength={20}
                                       aria-invalid={requiredElementNm === 'name'}
                                       onInput={typingDetector}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"addr"}>주소</FieldLabel>
                                <Input name={"addr"} type={"text"}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"phoneNumber"}>휴대폰번호</FieldLabel>
                                <Input name={"phoneNumber"} type={"tel"} placeholder={'- 을 제외한 숫자만 입력'} maxLength={11}
                                       onInput={(event) => telNumberFormatter(event)}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"password"}>비밀번호
                                    <span className="text-destructive">*</span></FieldLabel>
                                <FieldDescription>
                                    최소 8자 이상의 비밀번호를 입력해주세요.
                                </FieldDescription>
                                <Input name={"password"} type={"password"} placeholder={"••••••••"}
                                       onInput={typingDetector}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor={"rePassword"}>비밀번호 확인
                                    <span className="text-destructive">*</span></FieldLabel>
                                <FieldDescription>
                                    비밀번호를 재입력 해주세요.
                                </FieldDescription>
                                <Input name={"rePassword"} type={"password"} placeholder={"••••••••"}
                                       aria-invalid={requiredElementNm === 'rePassword'}
                                       onInput={typingDetector}/>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
                <div className="m-2 text-red-600" style={{visibility: isShow ? 'visible' : 'hidden'}}>{message}</div>
                <Button type="submit" className="w-full mt-2">
                    회원가입
                </Button>
            </form>
        </Card>
    )
}