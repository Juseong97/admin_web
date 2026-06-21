import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet,} from "@/components/ui/field"
import {Input} from "@/components/ui/input.tsx";

export default function Register() {

    return (
       <FieldSet className={"w-full max-w-xs"}>
           <FieldGroup>
               <Field>
                   <FieldLabel htmlFor={"memberId"}>아이디</FieldLabel>
                   <Input id={"memberId"} type={"text"} placeholder={"아이디를 입력해주세요"} maxLength={50}/>
               </Field>

               <FieldDescription>
                   아이디를 입력해주세요.
               </FieldDescription>

               <Field>
                   <FieldDescription>
                       최소 8자 이상의 비밀번호를 입력해주세요.
                   </FieldDescription>
                   <FieldLabel htmlFor={"memberPwd"}>비밀번호</FieldLabel>
                   <Input id={"memberPwd"} type={"password"} placeholder={"••••••••"}/>
               </Field>
           </FieldGroup>
       </FieldSet>
    )
}