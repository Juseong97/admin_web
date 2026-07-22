import {Badge} from "@/components/ui/badge.tsx";
import {BadgeCheckIcon,CircleX,TriangleAlert} from "lucide-react";

interface EmailStateBadgeProps {
    count : number; /*이메일 중복 카운트*/
}

export const EmailStateBadge = ({count} : EmailStateBadgeProps) => {
    switch (count) {
        case -1:
            return (
                <Badge variant="secondary">
                    <TriangleAlert />
                    미확인
                    </Badge>
            )
        case 0:
            return (
                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                <BadgeCheckIcon data-icon="inline-start"/>
                    확인
                    </Badge>
            )
        default:
            return (
                <Badge variant="destructive">
                <CircleX data-icon="inline-start"/>
                    중복
                    </Badge>
            )
    }
}