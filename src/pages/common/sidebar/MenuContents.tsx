import type {MenuEntity} from "@/services/admin/menuService.ts";

export default function MenuContents (sortedMenuList : Array<MenuEntity>) {

    return (
        <>
            {sortedMenuList.map(menu => (

            ))}
        </>
    )
}