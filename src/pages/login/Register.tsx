import {Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet,} from "@/components/ui/field"
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";

export default function Register() {

    return (
        <Card className="w-full max-w-lg p-5">
            <form>
                {/*<FieldSet className={"w-full max-w-xs"}>*/}
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>회원가입</FieldLegend>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor={"memberId"}>아이디</FieldLabel>
                                <Input id={"memberId"} type={"text"} placeholder={"아이디를 입력해주세요"} maxLength={50}/>
                                <FieldDescription>
                                    아이디를 입력해주세요.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <FieldDescription>
                                    최소 8자 이상의 비밀번호를 입력해주세요.
                                </FieldDescription>
                                <FieldLabel htmlFor={"memberPwd"}>비밀번호</FieldLabel>
                                <Input id={"memberPwd"} type={"password"} placeholder={"••••••••"}/>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </Card>
    )
}