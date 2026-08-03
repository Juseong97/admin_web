import {authApiClient, type authRequestEntity} from "@/services/api/authApiClient.ts";

export interface MenuEntity{
    menuId : string,
    parentId : string | null,
    menuNm : string,
    role : Array<string>,
    desc : string | null,
    sorNum : number,
    useYn : string
}

const menuService = {
    makeContent : async () : Promise<Array<MenuEntity>> => {
        const request : authRequestEntity = {
            reqUrl : 'menuList',
            loadingBarYn : 'Y',
        }
        
        return await authApiClient.get(request).then((data : Array<MenuEntity>) => {
            const sortDataList = data || [];
            if(sortDataList.length > 0){
                const parentNode = sortDataList.filter(p => p.parentId === null);
                const 
            }
            // sortDataList.map(())
            
            return sortDataList;
        });
    },

}
export default menuService
